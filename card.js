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
                    background-color: var(--bg-color, #ffffff);
                    color: var(--text-color, #333);
                    border-radius: var(--border-radius, 10px);
                    padding: var(--padding, 20px);
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                    transition: transform 0.3s, box-shadow 0.3s;
                }
                :host(:hover) {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
                }
            </style>
            <slot></slot>
        `;
        this.shadowRoot.appendChild(wrapper);
    }
}

customElements.define('card', Card);
