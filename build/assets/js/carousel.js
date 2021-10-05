const userItems = document.querySelector(".user-items"); 

const btnFirst = document.querySelector(".btn-first"); 
const btnSecond = document.querySelector(".btn-second"); 
const btnThird = document.querySelector(".btn-third"); 
const btnFourth = document.querySelector(".btn-fourth"); 

// querySelectorAll in Javascript : grabs all the HTML elements that have
// the same class/id... etc. 
const btnAll = document.querySelectorAll(".btn"); 


function btnClick() {
    // Move user-items container  +-(100vw) per button-click
    // if buttons[i] < buttons[i+1] : +100vw, else : -100vw
    // first button calls itself : imgNext()*number of imgs
    console.log(typeof(btnAll));
    
    
    // trial 2
        if (parseInt(btnAll[0].innerHTML) === 1){
            console.log("you are one step closer to solve this problem"); 
            userItems.style.transform = 'translate(0vw)';
        } else if (parseInt(btnAll[1].innerHTML) === 2) {
            userItems.style.transform = 'translate(-100vw)'; 
        } else if (parseInt(btnAll[2].innerHTML) === 3) {
            userItems.style.transform = 'translate(-200vw)'; 
        } else { 
            userItems.style.transform = 'translate(-300vw)'; 
        }
 
    // console.log(parseInt(btnFirst.innerHTML));
    // console.log(btnAll);
    // console.log(parseInt(btnAll[0].innerHTML));
    // imgNext(); 
}

// trial 1
function imgNext() { 
    userItems.style.transform = 'translate(-100vw)'; 
}

function imgPrev() { 
    userItems.style.transform = 'translate(100vw)'; 
}

function moveReset() { 
    userItems.style.transform = 'translate(0vw)';
}

btnFirst.addEventListener("click", btnClick); 
btnSecond.addEventListener("click", btnClick);
btnThird.addEventListener("click", btnClick); 
btnFourth.addEventListener("click", btnClick); 