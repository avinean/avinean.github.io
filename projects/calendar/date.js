class Calendar {
    calendarWrapper = null;
    months = [
        'january',
        'fabruary',
        'martch',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december'
    ];   
    days = [
        'sunday',
        'mondey',
        'tuesday',
        'wednesday',
        'thirsday',
        'friday',
        'saturday'
    ];
    currentDate = null;
    currentMonthName = null;
    monthField = null;

    constructor(selector) {
        this.calendarWrapper = document.querySelector(selector);
        const date = sessionStorage.date;
        if (date) { 
            this.currentDate = new Date(date);
        }
        else {
            this.currentDate = new Date();
        }
        this.currentMonthName = this.months[this.currentMonth];

        this.initWrappers();
        this.renderHandlers();
        this.renderContext();
        this.render();
    }

    get currentMonth() {
        return this.currentDate.getMonth();
    }

    set currentMonth(monthNumber) {
        this.currentDate.setMonth(monthNumber);
        this.monthField.value = this.months[monthNumber];
        this.render();
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
        const daysList = []

        for(let i = -this.weekDay + 1; i <= this.daysCount; i++) {
            if (i <= 0) {
                daysList.push('');
            }
            else {
                daysList.push(i);
            }
        }

        const weeksList = [
        ];

        for(let i = 0; i < daysList.length; i++) {
            const arr = weeksList[weeksList.length - 1];
            if (arr && arr.length < 7) {
                arr.push(daysList[i]);
            }
            else {
                weeksList.push([
                    daysList[i]
                ])
            }
        }

        return weeksList;
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
        document.querySelector('.context-wrapper').innerHTML = `
            <div class="context">
                <div class="context__item" id="add">Add</div>
            </div>
        `;
    }

    initContextEvents() {
        document
            .querySelector('.calendar')
            .addEventListener('contextmenu', e => {
                e.preventDefault();
                const context = document.querySelector('.context');
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
                


                const x = e.pageX;
                const y = e.pageY;

                context.style.display = 'block';
                context.style.top = y + 'px';
                context.style.left = x + 'px';
            });
    }

    renderHandlers() {
        // button to move to the previous month   
        const prev = document.createElement('button');
        prev.innerText = 'Prev';
        prev.addEventListener('click', () => {
            let cm = this.currentMonth - 1;
            if (cm < 0) cm = 12;
            this.currentMonth = cm;
        });

        this.calendarWrapper
            .querySelector('.handler-wrapper')
            .appendChild(prev);

        // field to display current month
        this.monthField = document.createElement('input');
        const currentMonth = this.months[this.currentMonth];
        this.monthField.value = currentMonth;
        this.calendarWrapper
            .querySelector('.handler-wrapper')
            .appendChild(this.monthField);

        // button to move to the next month
        const next = document.createElement('button');
        next.innerText = 'Next';
        next.addEventListener('click', () => {
            let cm = this.currentMonth + 1;
            if (cm > 11) cm = 0;
            this.currentMonth = cm;
        });

        this.calendarWrapper
            .querySelector('.handler-wrapper')
            .appendChild(next);
    }

    render() {
        sessionStorage.date = this.currentDate;

        let calendarTable = `
            <table class="calendar">
                <thead>
                    <tr class="calendar__row">
                        ${
                            this.days.map(day => 
                                `<th class="calendar__head-cell">${day}</th>`
                            ).join('')
                        }
                    </tr>
                </thead>
                <tbody>
                    ${
                        this.weeksList.map(row => `
                            <tr class="calendar__row">
                                ${
                                    row.map(char =>
                                        `<td class="calendar__cell" data-date="${char}">
                                            <div class="calendar__cell-inner">
                                                <span class="calendar__date">
                                                    ${char}
                                                </span>
                                            </div>
                                        </td>`
                                    ).join('')
                                }
                            </tr>
                        `).join('')
                    }
                </tbody>
            </table>
        `;

        this.calendarWrapper
            .querySelector('.calendar-wrapper')
            .innerHTML = calendarTable;

        this.initContextEvents();
    }
}

window.asd = new Calendar('#app');
