const userItems = document.querySelector(".user-items"); 

const btnFirst = document.querySelector(".btn-first"); 
const btnSecond = document.querySelector(".btn-second"); 
const btnThird = document.querySelector(".btn-third"); 

function btnClick() {
    // Move user-items container  +-(100vw) per button-click
    // if buttons[i] < buttons[i+1] : +100vw, else : -100vw
    // first button calls itself : imgNext()*number of imgs
    imgNext(); 
}

function imgNext() { 
    userItems.style.transform = 'translate(-100vw)'; 
}

function imgPrev() { 
    userItems.style.transform = 'translate(0vw)'; 
}

function moveReset() { 
    userItems.style.transform = 'translate(0vw)';
}

btnFirst.addEventListener("click", moveReset); 
btnSecond.addEventListener("click", btnClick);
btnThird.addEventListener("click", btnClick); 