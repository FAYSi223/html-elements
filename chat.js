class SimpleChat extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <style>
                .chat-container {
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    padding: 10px;
                    max-width: 400px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .message {
                    padding: 5px;
                    border-radius: 3px;
                    background-color: #f0f0f0;
                }
                .input-container {
                    display: flex;
                    gap: 5px;
                }
                input[type="text"] {
                    flex: 1;
                    padding: 5px;
                    border: 1px solid #ccc;
                    border-radius: 3px;
                }
                button {
                    padding: 5px 10px;
                    border: none;
                    border-radius: 3px;
                    background-color: #007bff;
                    color: white;
                    cursor: pointer;
                }
            </style>
            <div class="chat-container" id="chat-container">
                <div id="messages"></div>
                <div class="input-container">
                    <input type="text" id="message-input" placeholder="Type a message..." />
                    <button id="send-button">Send</button>
                </div>
            </div>
        `;

        this.shadowRoot.appendChild(wrapper);

        this.messagesElem = this.shadowRoot.querySelector('#messages');
        this.inputElem = this.shadowRoot.querySelector('#message-input');
        this.sendButton = this.shadowRoot.querySelector('#send-button');

        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.inputElem.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        this.loadMessages();
    }

    loadMessages() {
        const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        messages.forEach(msg => this.displayMessage(msg));
    }

    displayMessage(message) {
        const msgElem = document.createElement('div');
        msgElem.classList.add('message');
        msgElem.textContent = message;
        this.messagesElem.appendChild(msgElem);
    }

    sendMessage() {
        const message = this.inputElem.value.trim();
        if (message) {
            this.displayMessage(message);
            this.saveMessage(message);
            this.inputElem.value = '';
            this.messagesElem.scrollTop = this.messagesElem.scrollHeight; // Scroll to bottom
        }
    }

    saveMessage(message) {
        const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        messages.push(message);
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }
}

customElements.define('chat', SimpleChat);
