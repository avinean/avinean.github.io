const origin = 'https://newsapi.org/v2';
const apiKey = '854bd70b1227439fba390073d6bfd505';

const select = document.querySelector('#news_list');

// https://newsapi.org/v2/sources?apiKey=854bd70b1227439fba390073d6bfd505
fetch(`${origin}/sources?apiKey=${apiKey}`)
    .then(e => e.json())
    .then(e => {
        const options = e.sources.map(item => {
            return `<option value="${item.id}">${item.name}</option>`;
        }).join();
        
        select.innerHTML = options;
    })

select.addEventListener('change', e => {
    const source = e.target.value;

    fetch(`${origin}/top-headlines?sources=${source}&apiKey=${apiKey}`)
        .then(e => e.json())
        .then(e => {

            const articles = e.articles.map(article => {
                return `
                    <div>
                        <div style="width: 200px; height: 200px; overflow: hidden">
                            <img src="${article.urlToImage}"/>
                        </div>
                        <h2>${article.title}</h2>
                        <h4>${article.author} | ${article.publishedAt}</h4>
                        <p>
                            ${article.description}
                        </p>
                        <a href="${article.url}" target="_blank">Read more ...</a>
                    </div>
                `;
            }).join();

            document.querySelector('.news-wrapper').innerHTML = articles;
        });
});



