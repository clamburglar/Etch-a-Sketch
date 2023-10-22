
let body = document.querySelector('body');
let container = document.createElement('div');
container.className = 'container';
let grid = document.querySelector('.container');
let resize = document.createElement('button');
resize.textContent = 'Resize';

body.appendChild(resize);


let size = 256;
/* Generate a 16x16 grid of divs within container */
let createGrid = (size) => {
    body.appendChild(container);
    for (let i = 1; i < size + 1; i++) {
    let subCon = document.createElement('div');
    subCon.className = 'subcon';
    subCon.setAttribute('id', i)
    container.appendChild(subCon)
    }
}
createGrid(size);
/* Generate a random color */
const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}
resize.addEventListener('click', () => {
    let newSize = prompt('Enter a whole number of squares per side between 1 and 100 for a new grid');
    console.log(newSize)
    if (0 < newSize < 100) {
        size = newSize * newSize;
        body.removeChild(container);
        createGrid(size);
    }
})
const squares = document.querySelectorAll('.subcon')
for (const square of squares) {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = randColor();
        console.log(square.backgroundColor);
    })
}