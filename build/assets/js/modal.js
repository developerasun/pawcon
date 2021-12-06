const closeX = document.querySelector("#close");
const closeLetsGo = document.querySelector(".modal>span");
const popUp = document.querySelector(".modal");
const FADE_OUT = "modal-animate-fade-out";
const FADE_IN = "modal-animate-fade-in";

setTimeout(() => {
    popUp.classList.add(FADE_IN);
    popUp.style.display = "block";
    popUp.style.position = "fixed";
}, 1000);

// close and change display : button
closeX.addEventListener("click", () => {
    popUp.classList.remove(FADE_IN); 
    popUp.classList.add(FADE_OUT);
    setTimeout(()=>{
        popUp.style.display = "none";
    },1000);
});

// close and change display : let's go
closeLetsGo.addEventListener("click", () => {
    popUp.classList.remove(FADE_IN); 
    popUp.classList.add(FADE_OUT);
    setTimeout(()=>{
        popUp.style.display = "none";
    },1000);
});


// make modal movable
popUp.addEventListener("mousedown", () => {
    popUp.addEventListener("mousemove", moveModal);
});

document.addEventListener("mouseup", () => {
    popUp.removeEventListener("mousemove", moveModal);
});

function moveModal(e) {
    // window.getComputedstyle method returns an object containing all the css properties of the object.
    // window is a global object meaning that it can be omitted. 
    let getStyle = getComputedStyle(popUp);

    // style.left/right property affects the horizontal position of 
    // a positioned element. 
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    let movementX = e.movementX;
    let movementY = e.movementY;

    popUp.style.left = `${left+movementX}px`; 
    popUp.style.top = `${top+movementY}px`; 

}