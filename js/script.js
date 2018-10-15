window.addEventListener('load', () => {
    generateBG(htmlItems, 'body', '#ddd');
});

// var $ = e => {
//     return document.querySelector(e)
// };


// function createSlider(slider, left, right) {
    
//     slider = document.querySelector(slider);
//     slider.style.position = 'relative';
//     slider.style.perspective = '400px';
    
//     var wrap = slider.children[0],
//     slides = wrap.children,
//     width = parseInt(window.getComputedStyle(slider).width),
//     amount = slides.length,
//         step = 360 / amount,
//         angle = 0,
//         myR = width / (2 * Math.tan(Math.PI / amount)),
//         wrapPos = -myR * Math.cos(getRad(angle));
        
//     build(angle);
    
//     function build(angle) {
        
//         wrap.style.transform = `translateZ(${wrapPos}px) rotateY(0deg)`;
        
//         Array.prototype.forEach.call(slides, e => {
            
//             var z = `translateZ(${myR * Math.cos(getRad(angle))}px)`,
//             x = `translateX(${myR * Math.sin(getRad(angle))}px)`,
//                 y = `rotateY(${angle}deg)`;

//                 e.style.transform = `${z} ${x} ${y}`;

//             angle += step;
//         });
//     }
    
//     function getRad(deg) {
//         var rad = deg * Math.PI / 180;
//         return rad;
//     }

//     document.querySelector('#left').addEventListener('click', () => {
//         console.log(1);
//         angle += step;
//         wrap.style.transform = `translateZ(${wrapPos}px) rotateY(${angle}deg)`;
//     });
    
//     document.querySelector('#right').addEventListener('click', () => {
//         console.log(1);
//         angle -= step;
//         wrap.style.transform = `translateZ(${wrapPos}px) rotateY(${angle}deg)`;
//     });
// }

function generateBG(tags, selector, color) {
	tags = tags.split('|');
    var out = '';
    tags.forEach(e => {
        out += `<span data-id="tagElement">${e}</span>`
    });

    var elems = document.querySelectorAll(selector);
    Array.prototype.forEach.call(elems, e => {
        e.innerHTML += out
    });

    var tagMas = document.querySelectorAll(`${selector} span[data-id = tagElement]`),
        w = window.innerWidth,
        h = document.documentElement.scrollHeight;

    Array.prototype.forEach.call(tagMas, e => {
        e.style = `
			position: absolute;
			width: 500px;
			color: ${color};
            font-size: ${Math.floor(Math.random(.8,1) * 20)}px;
			top: ${Math.floor(Math.random(0,1) * h)}px;
			left: ${Math.floor(Math.random(0,1) * w)}px;`;
    });
}

var htmlItems = `&lt;header /&gt;|&lt;body /&gt;|&lt;html /&gt;|&lt;img /&gt;|&lt;style /&gt;|&lt;script /&gt;|&lt;hr /&gt;|&lt;section /&gt;|&lt;article /&gt;|&lt;option /&gt;|&lt;select /&gt;|&lt;input /&gt;|&lt;header /&gt;|&lt;body /&gt;|&lt;html /&gt;|&lt;img /&gt;|&lt;style /&gt;|&lt;script /&gt;|&lt;hr /&gt;|&lt;section /&gt;|&lt;article /&gt;|&lt;option /&gt;|&lt;select /&gt;|&lt;input /&gt;|&lt;header /&gt;|&lt;body /&gt;|&lt;html /&gt;|&lt;img /&gt;|&lt;style /&gt;|&lt;script /&gt;|&lt;hr /&gt;|&lt;section /&gt;|&lt;article /&gt;|&lt;option /&gt;|&lt;select /&gt;|&lt;input /&gt;|&lt;header /&gt;|&lt;body /&gt;|&lt;html /&gt;|&lt;img /&gt;|&lt;style /&gt;|&lt;script /&gt;|&lt;hr /&gt;|&lt;section /&gt;|&lt;article /&gt;|&lt;option /&gt;|&lt;select /&gt;|&lt;input /&gt;`;
