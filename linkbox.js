// linkbox.js

class LinkBox extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    // Styles für das Widget
    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: block;
        padding: 20px;
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        margin: 20px 0;
        font-family: Arial, sans-serif;
      }
      h2 {
        font-size: 18px;
        color: #333;
        margin-bottom: 15px;
      }
      ::slotted(link-item) {
        display: block;
        margin: 10px 0;
        color: #0078d4;
        text-decoration: none;
        font-size: 16px;
      }
      ::slotted(link-item:hover) {
        text-decoration: underline;
      }
      ::slotted(link-button) {
        display: inline-block;
        padding: 10px 20px;
        margin-top: 15px;
        background-color: #0078d4;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        text-align: center;
        transition: background-color 0.3s;
      }
      ::slotted(link-button:hover) {
        background-color: #005fa3;
      }
    `;
    shadow.appendChild(style);

    // Hauptcontainer
    const container = document.createElement('div');

    // Titel hinzufügen
    const title = this.getAttribute('title');
    if (title) {
      const heading = document.createElement('h2');
      heading.textContent = title;
      container.appendChild(heading);
    }

    // Slot für Inhalte
    const slot = document.createElement('slot');
    container.appendChild(slot);

    shadow.appendChild(container);
  }
}

class LinkItem extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', () => {
      const href = this.getAttribute('href');
      if (href) {
        window.open(href, '_blank');
      }
    });
  }
}

class LinkButton extends HTMLElement {
  constructor() {
    super();
    this.style.cursor = 'pointer';
    this.addEventListener('click', () => {
      const href = this.getAttribute('href');
      if (href) {
        window.open(href, '_blank');
      }
    });
  }
}

// Definiere die Custom Elements
customElements.define('linkbox', LinkBox);
customElements.define('link-item', LinkItem);
customElements.define('link-button', LinkButton);
