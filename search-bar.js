class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Search...';
        input.style.width = '100%';
        input.style.padding = '10px';
        input.style.fontSize = '16px';
        input.style.border = '1px solid #ccc';
        input.style.borderRadius = '5px';

        input.addEventListener('input', () => this.performSearch(input.value));

        this.shadowRoot.appendChild(input);
    }

    connectedCallback() {
        const typeAttribute = this.getAttribute('type');
        this.searchTypes = typeAttribute ? typeAttribute.split(',').map(t => t.trim()) : null;
    }

    performSearch(query) {
        const elements = document.querySelectorAll('[data-type]');
        elements.forEach(el => {
            const type = el.getAttribute('data-type');
            const content = el.textContent.toLowerCase();

            if (
                (!this.searchTypes || this.searchTypes.includes(type)) &&
                content.includes(query.toLowerCase())
            ) {
                el.style.display = '';
            } else {
                el.style.display = 'none';
            }
        });
    }
}
customElements.define('search-bar', SearchBar);
