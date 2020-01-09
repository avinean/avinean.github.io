document.querySelector('#input').addEventListener('input', event => {
    const {target, target: {value = ''}} = event;
    // debugger
    const dot = '.'
    const regex = new RegExp('^\\d[\\d\\' + dot + ']*', 'g');
    const dotRegex = new RegExp('\\' + dot + '+', 'g');
    
    const matchedValues = value.match(regex);

    let clearValue = '';
    if (matchedValues) {
        clearValue = matchedValues.join('');
    }

    const dotIndex = clearValue.indexOf(dot);
    if (dotIndex > 0) {
        clearValue = clearValue.replace(dotRegex, '');
        const fisrtPart = clearValue.slice(0, dotIndex);
        const secondPart = clearValue.slice(dotIndex, clearValue.length);
        clearValue = fisrtPart + '.' + secondPart;
    }
    
    target.value = clearValue;
})