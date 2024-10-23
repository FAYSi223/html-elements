class Chat extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <style>
                #messages {
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    padding: 10px;
                    max-height: 300px;
                    overflow-y: auto;
                    background-color: #fafafa;
                }
                .input-container {
                    display: flex;
                    gap: 5px;
                }
                input[type="text"] {
                    flex: 1;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    outline: none;
                }
                button {
                    padding: 10px 15px;
                    border: none;
                    border-radius: 5px;
                    background-color: #007bff;
                    color: white;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #0056b3;
                }
            </style>
            <div id="messages"></div>
            <div class="input-container">
                <input type="text" id="message-input" placeholder="Type a message..." />
                <button id="send-button">Send</button>
            </div>
        `;

        this.shadowRoot.appendChild(wrapper);
        this.messagesElem = this.shadowRoot.querySelector('#messages');
        this.inputElem = this.shadowRoot.querySelector('#message-input');
        this.sendButton = this.shadowRoot.querySelector('#send-button');

        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.inputElem.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
    }

    sendMessage() {
        const message = this.inputElem.value.trim();
        if (message) {
            this.dispatchEvent(new CustomEvent('message-sent', {
                detail: { message },
                bubbles: true,
                composed: true
            }));
            this.inputElem.value = '';
        }
    }

    addMessage(message) {
        const msgElem = document.createElement('div');
        msgElem.textContent = message;
        this.messagesElem.appendChild(msgElem);
        this.messagesElem.scrollTop = this.messagesElem.scrollHeight; // Scroll to bottom
    }
}

customElements.define('chat', Chat);
