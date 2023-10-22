
let body = document.querySelector('body');
let container = document.createElement('div');
container.className = 'container';
let grid = document.querySelector('.container');
let resize = document.createElement('button');
resize.textContent = 'Resize';

body.appendChild(resize);
body.appendChild(container);

/* Generate a 16x16 grid of divs within container */
for (let i = 1; i < 257; i++) {
    let subCon = document.createElement('div');
    subCon.className = 'subcon';
    subCon.setAttribute('id', i)
    container.appendChild(subCon)
}

/* Generate a random color */
const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

const buttons = document.querySelectorAll('.subcon')
for (const button of buttons) {
    button.addEventListener('mouseenter', (event) => {
        event.button.style.color = randColor();
        console.log(button.style.color);
    })
}