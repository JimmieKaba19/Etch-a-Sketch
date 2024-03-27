// const container = document.querySelector(".container");
// const containerSize = container.getBoundingClientRect();
// const setGrid = document.querySelector(".grid-btn");
// const clearGrid = document.querySelector(".clear-btn");

// let x;
// let y;
// function XGrid(){
//     x = +prompt("Enter X grid size (X < 100)")
//     return x;
// }

// function YGrid(){
//     y = +prompt("Enter Y grid size (Y < 100)")
//     return y;
// }

// let XSize;
// let YSize;
// function gridSize(XSize, YSize){
//     XSize = XGrid();
//     YSize = YGrid();
//     if(XSize >= 100) {
//         console.log("Re-enter X value");
//     } else if(YSize >= 100) {
//         console.log("Re-enter y value");
//     } else {
//         return result = `${XSize}, ${YSize}`;
//     }
// }

// function grid() {
//     setGrid.addEventListener(("click"), () => {
//         console.log(gridSize(XSize, YSize));
//         defaultGrid();
//     })
// }
// grid();

// function defaultGrid(grid){
//     for(i = 1; i >= XSize * YSize; i++){
//         let gridItem = document.createElement(".div");
//         gridItem.setAttribute("class", "gridItem");
//         gridItem.style.flexBasis = (containerSize.width - 6) / grid * "px";
//         gridItem.addEventListener(("mouseenter"), () => {
//             gridItem.setAttribute("style", "background-color: black;");
//         });
//         container.appendChild(gridItem)
//         console.log("grid creating");
//     }
//     console.log("grid creation");
// }

// defaultGrid();


// setGrid.addEventListener(("click"), (e) => {
//     //XGrid();
//     grid(e.target.value);
// })

// let x;
// function XGrid(){
//     x = +prompt("Enter grid size (X < 100)")
//     if(x >= 100) {
//         console.log("Re-enter X value");
//     } else {
//         return x;
//     }
// }

// let size;
// function grid(size){
//     size = XGrid();
//     for(i = 1; i <= size * size; i++){
//         let gridItem = document.createElement("div");
//         gridItem.setAttribute("class", "gridItem");
//         gridItem.style.flexBasis = (containerSize.width - 6) / size + "px";
//         gridItem.setAttribute("style", "border: 1px solid black;  background-color: white;");
//         gridItem.addEventListener(("mouseenter"), () => {
//             gridItem.setAttribute("style", "background-color: black;");
//         });
//         container.appendChild(gridItem)
//         console.log("grid creating");
//     }
// }

const container = document.querySelector(".container");
let containerSize = document.querySelector(".container").offsetWidth;
const setGrid = document.querySelector(".grid-btn");
const presentGrid = document.querySelector(".present-btn");
let isDrawing = false;

function randomColor() {
    let color = [];
    for(let i = 0; i < 3; i++){
        color.push(Math.floor(Math.random() * 256));
    }
    return `rgb(${color.join(",")})`
}

function makeGrid(boxesPerFace){
    container.innerHTML = "";
    const totalGridItems = boxesPerFace ** 2;
    for (let i = 0; i < totalGridItems; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        container.appendChild(gridItem);
    }
    container.style.width = `${boxesPerFace * (containerSize / 16)}px`;
    container.style.height = `${boxesPerFace * (containerSize / 16)}px`;

    presentGrid.addEventListener("click", () => {
        alert(`Current total: ${boxesPerFace}`);
    });
}

function gridSet(){
    let boxesPerFace = prompt("Enter number of boxes per grid side (boxes < 100)");
    boxesPerFace = Math.min(Math.max(parseInt(boxesPerFace), 1), 100);
    makeGrid(boxesPerFace);
}

container.addEventListener(("mousedown"), () => {
    isDrawing = true;
});

container.addEventListener(("mouseup"), () => {
    isDrawing = false;
});

container.addEventListener(("mouseover"), (event) => {
    if(isDrawing && event.target.classList.contains("grid-item")) {
        event.target.style.backgroundColor = randomColor();   
        event.target.style.blur();
    }
});

makeGrid(16);
setGrid.addEventListener("click", gridSet);

