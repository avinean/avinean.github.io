import './dropDown.scss';

class DropDown {
    constructor(props) {
        // selector
        // itemsList
        // eventHandler

        this.selector = props.selector;
        this.itemsList = props.itemsList;
        this.eventHandler = props.eventHandler;

        this.createDisplay();
        this.createList();
    }

    createDisplay() {

        this.display = document.createElement('input');
        this.display.classList.add('dropdown__display');

        document.querySelector(this.selector)
            .appendChild(this.display);

        this.display.addEventListener('click', e => {
            this.wrapper.style.display = 'block';
            
            const { width, height, top, left } = e.target.getBoundingClientRect();
            const margin = 10;
            this.wrapper.style.width = width + 'px';
            this.wrapper.style.top = top + height + margin + 'px';
            this.wrapper.style.left = left + 'px';
        });
        this.display.addEventListener('focus', e => {
            e.target.blur();
        })
    }

    createList() {

        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('dropdown__list');

        this.list = document.createElement('ul');

        this.itemsList.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.value;

            this.list.appendChild(li);
            li.addEventListener('click', () => {
                this.wrapper.style.display = 'none';
                this.display.value = item.value;

                this.eventHandler(item.key);
            });
        });

        this.wrapper.appendChild(this.list);
        document.body.appendChild(this.wrapper);
    }
}

export default DropDown;