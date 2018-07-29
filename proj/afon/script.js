var btn = document.querySelector('#btn');

document.querySelector('#req').addEventListener('click', function() {
    document.querySelector('.form').style.display = 'block';
});


document.querySelector('.zmdi-close').addEventListener('click', function() {
    document.querySelector('.form').style.display = 'none';
});