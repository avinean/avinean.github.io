export default function() {
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
                                        <div class="calendar__cell-inner" data-events="${char}">
                                            <span class="calendar__date">
                                                ${char}
                                            </span>
                                            <div class="calendar__events">
                                                ${this.renderEvents(char)}
                                            </div>
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
    this.initEventsModal();
}