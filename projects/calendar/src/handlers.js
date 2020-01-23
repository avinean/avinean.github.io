export function renderHandlers() {
    // button to move to the previous month   
    const prev = document.createElement('button');
    prev.innerText = 'Prev';
    prev.addEventListener('click', () => {
        let cm = this.currentMonth - 1;
        if (cm < 0) cm = 11;
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
