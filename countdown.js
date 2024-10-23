class CountdownTimer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.endDate = new Date(this.getAttribute('end-date'));

        const wrapper = document.createElement('div');
        wrapper.classList.add('countdown-container');
        wrapper.innerHTML = `
            <style>
                .countdown-container {
                    font-family: Arial, sans-serif;
                    font-size: 20px;
                    color: #333;
                    display: flex;
                    gap: 10px;
                }
                .countdown-item {
                    background-color: #f0f0f0;
                    padding: 10px;
                    border-radius: 5px;
                    text-align: center;
                }
            </style>
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
