$(document).ready(function() {
    fillSel();
    printNews('bbc-news');
    $('.source').on('input', e => {
        printNews($('.source option:selected').val());
    })
});

function fillSel() {
    $.get(
        'https://newsapi.org/v2/sources',
        {
            "apiKey": "854bd70b1227439fba390073d6bfd505"
        },
        json => {
            var out = `<option value="" selected disabled hidden></option>`
            json.sources.forEach( e => {
                // e.language == 'ru' ?
                out += `<option value="${e.id}">${e.name}</option>`
                // e;
            })
            $('.source').html(out);
        }
    );
}

function printNews(src) {
    $.get(
        'https://newsapi.org/v2/everything',
        {
            "q": src,
            "apiKey": "854bd70b1227439fba390073d6bfd505"
        },
        json => {
            json = json.articles;
            var out = '';
            json.forEach( e => {
                out += `
                <div class="article">
                    <a href="${e.url}" class="title">${e.title}</a>
                    <div class="mark">
                        <span class="name">${e.source.name}</span>|
                        <span class="time">${e.publishedAt}</span>
                    </div>
                    <img src="${e.urlToImage}" alt="" class="img">
                    <div class="description">${e.description}</div>
                    <p class="clearfix"></p>
                    <hr>
                </div>
                `;
                $('.news').html(out);
            }
        );
    });
}
