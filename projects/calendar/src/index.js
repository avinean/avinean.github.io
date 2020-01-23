import './index.scss';
import DropDown from './dropDown';

import { months, days } from './help.js';
import weeksListGenerator from './weeksList.js';
import { renderHandlers } from './handlers.js';
import render from './render.js';
import { addNewEvent, parseEvents } from './events.js';

import utils, { get, create, on } from './utils.js';

class Calendar {

    constructor(selector) {
        this.calendarWrapper = null;
        this.months = months;   
        this.days = days;
        this.currentDate = null;
        this.currentMonthName = null;
        this.monthField = null;
        this.events = {};
        this.selectedDate = null;

        this.calendarWrapper = utils.get(selector);
        const date = sessionStorage.date;
        if (date) { 
            this.currentDate = new Date(date);
        }
        else {
            this.currentDate = new Date();
        }
        this.currentMonthName = this.months[this.currentMonth];

        parseEvents.apply(this);
        this.initWrappers();
        renderHandlers.apply(this);
        this.renderContext();
        this.initModalHandlers();
        render.apply(this);
    }

    get currentMonth() {
        return this.currentDate.getMonth();
    }

    set currentMonth(monthNumber) {
        this.currentDate.setMonth(monthNumber);
        this.monthField.value = this.months[monthNumber];
        render.apply(this);
    }

    get daysCount() {
        const date = new Date(this.currentDate)
        date.setMonth(this.currentMonth + 1);
        date.setDate(0);
        return date.getDate();
    }

    get weekDay() {
        const date = new Date(this.currentDate)
        date.setDate(1);
        return date.getDay();
    }

    get weeksList() {
        return weeksListGenerator.apply(this);
    }

    initModalHandlers() {
        const close = get('.modal__close');
        const cancel = get('#close-modal');
        const form = document.forms['add-event-modal'];

        on(close, 'click', this.closeModal.bind(this))
        on(cancel, 'click', this.closeModal.bind(this))
        on(form, 'submit', addNewEvent.bind(this))
    }

    initWrappers() {
        const html = `
            <div class="handler-wrapper"></div>
            <div class="calendar-wrapper"></div>
            <div class="context-wrapper"></div>
        `;
        this.calendarWrapper.innerHTML = html;
    }

    renderContext() {
        const contextWrapper = get('.context-wrapper');

        const context = create({
            el: 'div', 
            cls: 'context'
        });

        const addItem = create({
            el: 'div',
            cls: 'context__item',
            id: 'add',
            text: 'Add'
        })
        addItem.addEventListener('click', this.showModal.bind(this));

        context.appendChild(addItem);

        contextWrapper.appendChild(context);
    }

    showModal() {
        const modal = get('.modal');
        modal.style.display = 'block';

        const context = get('.context');
        context.style.display = 'none';
    }

    closeModal() {
        const modal = get('.modal');
        modal.style.display = 'none';
    }

    initContextEvents() {
        get('.calendar')
            .addEventListener('contextmenu', e => {
                e.preventDefault();
                const context = get('.context');
                const target = e.target.closest('.calendar__cell');
                if (!target) {
                    context.style.display = 'none';
                    return;
                }

                const date = target.dataset.date;
                if (!date) {
                    context.style.display = 'none';
                    return;
                }
                
                this.selectedDate = date;

                const x = e.pageX;
                const y = e.pageY;

                context.style.display = 'block';
                context.style.top = y + 'px';
                context.style.left = x + 'px';
            });
    }

    initEventsModal() {
        get('.calendar')
            .addEventListener('click', e => {

                const eventsDate = e.target.dataset.events

                const cell = e.target.closest('.calendar__cell-inner');

                if (cell) { 

                    const { events } = cell.dataset;

                    if (cell.className.includes('calendar__cell-inner--open')) {
                        this.currentCheckedCell = null;
                    }
                    else {
                        this.currentCheckedCell = events;
                    }

                    cell.classList.toggle('calendar__cell-inner--open');
                    cell.querySelector('.calendar__events')
                        .innerHTML = this.renderEvents(events);
                }

            });
    }

    renderEvents(date) {
        const month = this.currentDate.getMonth();
        const year = this.currentDate.getFullYear();
        const key = `${date}-${month}-${year}`;

        if (!this.events[key]) return '';

        let btn = '';
        if (this.events[key].events.length > 4) {
            btn = `<span>...</span>`;
        }

        let eventsList = this.events[key].events;
        if (this.currentCheckedCell != date) {
            eventsList = eventsList.slice(0, 4);
        }

        return eventsList.map(event => {
            return `
                <div class="event">
                    <div
                        class="event__priority event__priority--${event.priority}"
                    ></div>
                    <div class="event__message">${event.message}</div>
                </div>
            `
        }).join('') + btn;
    }
}

window.calendar = new Calendar('#app');

window.dropDown = new DropDown({
    selector: '#drop-down',
    itemsList: months.map((value, key) => ({key, value})),
    eventHandler: (monthNumber) => {
        window.calendar.currentMonth = monthNumber;
    }
});