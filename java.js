const container = document.querySelector('#container')
newGrids = document.querySelector('#newGrid')


newGrids.addEventListener('click', () => {
    const resultion = prompt("Enter the resultion of the grids:  ")
    makeGrids(resultion)
} )


function makeGrids(resultion=16) {
    container.innerHTML = ''
for (let i = 0; i <= resultion * resultion - 2; i++){
    const gridElement = document.createElement('div')
    gridElement.classList.add('grids')
    gridElement.addEventListener('mouseover', changeColor)
    gridElement.addEventListener('mousedown', changeColor)
    container.appendChild(gridElement)  
}}

function changeColor(e){
    let num = Math.round(Math.random() * 10)
    let currentColor;
    if (num <= 3) currentColor = 'red'
    else if (num > 3 && num <= 6) currentColor = 'green'
    else {currentColor = 'blue'}  

    e.target.style.backgroundColor = currentColor
    console.log(currentColor)
    
}

makeGrids()



