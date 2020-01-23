export default function () {
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