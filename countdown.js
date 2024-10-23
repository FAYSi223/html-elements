class CountdownTimer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.endDate = new Date(this.getAttribute('end-date'));

        const wrapper = document.createElement('div');
        wrapper.classList.add('countdown-container');
        this.updateStyles(wrapper);  // Setze die Stile

        wrapper.innerHTML = `
            <div class="countdown-item" id="days">0d</div>
            <div class="countdown-item" id="hours">0h</div>
            <div class="countdown-item" id="minutes">0m</div>
            <div class="countdown-item" id="seconds">0s</div>
        `;

        this.shadowRoot.appendChild(wrapper);

        this.daysElem = this.shadowRoot.querySelector('#days');
        this.hoursElem = this.shadowRoot.querySelector('#hours');
        this.minutesElem = this.shadowRoot.querySelector('#minutes');
        this.secondsElem = this.shadowRoot.querySelector('#seconds');

        this.updateTimer();
        this.interval = setInterval(() => this.updateTimer(), 1000);
    }

    updateStyles(wrapper) {
        // Lese alle relevanten Attribute aus und setze die Stile
        const bgColor = this.getAttribute('bg-color') || '#f0f0f0';
        const textColor = this.getAttribute('text-color') || '#333';
        const fontSize = this.getAttribute('font-size') || '20px';
        const padding = this.getAttribute('padding') || '10px';
        const borderRadius = this.getAttribute('border-radius') || '5px';
        const gap = this.getAttribute('gap') || '10px';

        const style = document.createElement('style');
        style.textContent = `
            .countdown-container {
                font-family: Arial, sans-serif;
                font-size: ${fontSize};
                color: ${textColor};
                display: flex;
                gap: ${gap};
            }
            .countdown-item {
                background-color: ${bgColor};
                padding: ${padding};
                border-radius: ${borderRadius};
                text-align: center;
            }
        `;
        wrapper.appendChild(style);
    }

    updateTimer() {
        const now = new Date();
        const timeRemaining = this.endDate - now;

        const days = Math.floor(Math.abs(timeRemaining) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((Math.abs(timeRemaining) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((Math.abs(timeRemaining) % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((Math.abs(timeRemaining) % (1000 * 60)) / 1000);

        if (timeRemaining <= 0) {
            clearInterval(this.interval);
            this.dispatchEvent(new CustomEvent('countdown-finished'));
            this.daysElem.textContent = `-${days}d`;
            this.hoursElem.textContent = `-${hours}h`;
            this.minutesElem.textContent = `-${minutes}m`;
            this.secondsElem.textContent = `-${seconds}s`;
        } else {
            this.daysElem.textContent = `${days}d`;
            this.hoursElem.textContent = `${hours}h`;
            this.minutesElem.textContent = `${minutes}m`;
            this.secondsElem.textContent = `${seconds}s`;
        }
    }
}

customElements.define('countdown-timer', CountdownTimer);
