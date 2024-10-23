class Card extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'card-wrapper');
        wrapper.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: var(--bg-color, #3498db);
                    color: var(--text-color, #ffffff);
                    border-radius: var(--border-radius, 15px);
                    padding: var(--padding, 20px);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                    transition: transform 0.3s, box-shadow 0.3s;
                    margin: 10px; /* Abstand zwischen den Karten */
                    max-width: 300px; /* Maximale Breite der Karte */
                }
                :host(:hover) {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
                }
                h1 {
                    margin: 0 0 10px;
                    font-size: 24px;
                }
                p {
                    margin: 0;
                    font-size: 16px;
                }
            </style>
            <slot></slot>
        `;
        this.shadowRoot.appendChild(wrapper);
    }
}

customElements.define('card', Card);
