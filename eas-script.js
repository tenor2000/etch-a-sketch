// Global Variables
var gridSize = 64;
var tileColor = 'black';

const container = document.getElementById("container");
const instruct = document.createElement('p');
instruct.textContent = 'Sit back, relax and draw!'

const sketchbox = document.createElement("div");
sketchbox.classList = "sketchbox";

const controls = document.createElement("div");
controls.style.padding = "32px"
const sizeBtn = document.createElement("button")
sizeBtn.textContent = "Change Size";
sizeBtn.onclick = function () {newGridSize()}
const clearBtn = document.createElement("button")
clearBtn.textContent = "Clear";
clearBtn.onclick = function () {clearGrid()}

controls.appendChild(sizeBtn);
controls.appendChild(clearBtn);

// Color Palette
const palette = document.createElement("div")

const paletteColors = ['black', 'red', 'purple', 'blue', 'green', 'yellow', 'orange'];

paletteColors.forEach(color => {
    const button = document.createElement("button");
    button.classList = `button-${color}`;
    button.onclick = function () { tileColor = color; };
    palette.appendChild(button);
});

// final eraser button
const eraserButton = document.createElement("button");
eraserButton.classList = `button-erase`;
eraserButton.onclick = function () { tileColor = 'lightgrey'; };
palette.appendChild(eraserButton);

// setting the page
container.appendChild(instruct)
container.appendChild(controls);
container.appendChild(sketchbox);
container.appendChild(palette);


// Functions

function createGrid(size) {
    for (i=1; i <= (size**2); i++) {
        var tileSquare = document.createElement("div");
        tileSquare.classList = "sketchbox-tile";
        tileSquare.style.setProperty('--sketchbook-dimensions', size)
        sketchbox.appendChild(tileSquare);
        tileSquare.addEventListener("mousedown", (event) => startDrawing(event));
        tileSquare.addEventListener("mouseenter", (event) => drawColor(event));
        tileSquare.addEventListener("mouseup", stopDrawing);
    }
}

function newGridSize() {
    // Prompt the user for a new grid size
    var newSize = prompt("Enter a new grid size:", gridSize);

    // Check if the user entered a valid number
    if (newSize !== null && !isNaN(newSize) && newSize > 0 && newSize <= 100) {
    // Update gridSize and recreate the grid
    gridSize = parseInt(newSize, 10);
    // Remove existing grid content
    sketchbox.innerHTML = '';
    createGrid(gridSize);
    } else {
    alert("Please enter a valid number greater than 0 and less than 100.");
    }
}

function clearGrid() {
    // erase and display new grid
    sketchbox.innerHTML = '';
    createGrid(gridSize);
}

let isDrawing = false;

function drawColor(event) {
    if (isDrawing) {
        event.target.style.backgroundColor = tileColor;
    }
}

function startDrawing(event) {
    isDrawing = true;
    drawColor(event);
}

function stopDrawing() {
    isDrawing = false;
}

// etch-a-sketch production
createGrid(gridSize)