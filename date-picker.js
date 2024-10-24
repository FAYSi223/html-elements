class DatePicker extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.classList.add('date-picker-container');
        this.updateStyles(wrapper);

        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.classList.add('date-picker-input');

        const placeholder = this.getAttribute('placeholder') || 'Select date';
        dateInput.placeholder = placeholder;

        dateInput.addEventListener('change', (event) => {
            const selectedDate = event.target.value;
            this.dispatchEvent(new CustomEvent('date-changed', {
                detail: { date: selectedDate }
            }));
        });

        wrapper.appendChild(dateInput);
        this.shadowRoot.appendChild(wrapper);
    }

    updateStyles(wrapper) {
        const style = document.createElement('style');
        style.textContent = `
            .date-picker-container {
                font-family: Arial, sans-serif;
                display: inline-block;
                padding: 10px;
                border: 2px solid #ccc;
                border-radius: 5px;
                background-color: white;
            }

            .date-picker-input {
                font-size: 16px;
                padding: 5px;
                border: none;
                outline: none;
                width: 100%;
                box-sizing: border-box;
            }

            .date-picker-input:focus {
                border: 2px solid #3498db;
                border-radius: 3px;
            }
        `;
        wrapper.appendChild(style);
    }
}

customElements.define('date-picker', DatePicker);
