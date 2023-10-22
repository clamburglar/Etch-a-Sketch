
let body = document.querySelector('body');
let container = document.createElement('div');
container.className = 'container';
let grid = document.querySelector('.container');
let resize = document.createElement('button');
resize.textContent = 'Resize';

body.appendChild(resize);
body.appendChild(container)

/* Generate a random color */

const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

/* Generate a grid of divs within container based on size parameters */

let createGrid = () => {
    for (let i = 1; i < size + 1; i++) {
    let subCon = document.createElement('div');
    subCon.className = 'subcon';
    subCon.setAttribute('id', i);
    subCon.style.width = (800 / Math.sqrt(size)) + 'px';
    container.appendChild(subCon);
    console.log(size);
    }
    let squares = document.querySelectorAll('.subcon')
    for (const square of squares) {
        square.addEventListener('mouseover', () => {
        square.style.backgroundColor = randColor();
    })
    }
}
/* Apply initial grid */

let size = 256;
createGrid(size);


/* Removes all child nodes of a container */

remChildren = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
/* Creates a new grid based off input size returned */

resize.addEventListener('click', () => {
    let newSize = prompt('Enter a whole number of squares per side between 1 and 100 for a new grid');
    size = newSize * newSize;
    remChildren(container);
    createGrid(size);
})

