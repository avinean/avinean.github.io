export const get = s => document.querySelector(s);

export const create = ({el, cls, id, text}) => {
    const element = document.createElement(el);
    if (cls) element.classList.add(cls);
    if (id) element.id = id;
    if (text) element.innerText = text;

    return element;
};

export const on = (element, event, handler) => {
    element.addEventListener(event, handler);
};

export default {
    get, create, on
};