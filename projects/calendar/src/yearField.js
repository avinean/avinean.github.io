import './yearField.scss';

export default class {
    constructor({
        selector,
        eventHandler,
        min, max
    }) {
        this.selector = selector;
        this.eventHandler = eventHandler;
        this.min = min;
        this.max = max;

        this.createDisplay();
    }

    createDisplay() {
        this.wrapper = document.querySelector(this.selector);
        this.field = document.createElement('input');
        this.field.classList.add('yearfield__display');
        this.field.addEventListener('input', e => {
            const target = e.target;

            let value = target.value.replace(/\D/g, '');
            value = value.slice(0, 4);
            if (value.length === 4 && value < this.min) {
                value = this.min;
            }
            if (value.length === 4 && value > this.max) {
                value = this.max;
            }

            target.value = value;
        });
        this.field.addEventListener('change', e => {
            this.eventHandler(e.target.value);
        })


        this.wrapper.appendChild(this.field);
    }
}