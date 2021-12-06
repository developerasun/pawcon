const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("brush_range");
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave"); 


const INITIAL_COLOR = "#2c2c2c";

canvas.width = 500;
canvas.height = 500; 

ctx.strokeStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

ctx.fillStyle = INITIAL_COLOR;



let painting = false;
let filling = false; 

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX ; 
    const y = event.offsetY ; 

    if (!painting) { 
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else {
        ctx.lineTo(x,y);
        ctx.stroke();
    }

}

function onMouseDown(event){
    painting = true; 
}

function onMouseUp(event){
    stopPainting();
}

function onMouseLeave(event){
    stopPainting();
}

function changeColor(event){ 
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function changeRange(event){
    const size = event.target.value ;
    ctx.lineWidth = size;
}

function modeClicked(){
    if (filling===true){
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true ;
        mode.innerText = "Paint"; 
    }
}

function handleCanvasClick(){
    if (filling) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

function saveClicked(){
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "myDrawing";
    link.click();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
}

Array.from(colors).forEach(color => 
    color.addEventListener("click", changeColor));

if (range){
    range.addEventListener("input", changeRange);
}

if (mode) { 
    mode.addEventListener("click", modeClicked); 
}

if (save) {
    save.addEventListener("click", saveClicked);
}