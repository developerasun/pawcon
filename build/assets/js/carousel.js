// trial 3 : WC3 tutorial (https://www.w3schools.com/howto/howto_js_slideshow.asp)
// difference between addEventListener and onclick 
// addEventListener: can add multiple events to an element - method 
// onclick: can be added to a single element only. can be added 
// in HTML as attribute - property 

let slideIndex = 1; 
showSlides(slideIndex); 

function showSlides(n){    
    let i; 

    // document.getElementById : returns HTML collection(items can be referred with name, id, index)
    // document.querySelectorAll : returns NodeList(items only can be referred with index)
    const slides = document.querySelectorAll(".artwork");
    const bars = document.querySelectorAll(".bar"); 

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++ ) { 
        slides[i].style.display = 'none';
    }

    for ( i = 0; i < bars.length; i++ ) { 
        bars[i].className = bars[i].className.replace(" clicked", ""); 
        console.log(bars[i].className)
    }

    slides[slideIndex-1].style.display = "block";
    bars[slideIndex-1].className += " clicked";
}

function plusSlide(number){
    showSlides( slideIndex += number );
}

function currentSlide(number){
    slideIndex = number; 
    showSlides(slideIndex); 
}

// const userItems = document.querySelector(".user-items"); 

// const btnFirst = document.querySelector(".btn-first"); 
// const btnSecond = document.querySelector(".btn-second"); 
// const btnThird = document.querySelector(".btn-third"); 
// const btnFourth = document.querySelector(".btn-fourth"); 

// // querySelectorAll in Javascript : grabs all the HTML elements that have
// // the same class/id... etc. 
// const btnAll = document.querySelectorAll(".btn"); 

// trial 1
// function imgNext() { 
//     userItems.style.transform = 'translate(-100vw)'; 
// }

// function imgPrev() { 
//     userItems.style.transform = 'translate(100vw)'; 
// }

// function moveReset() { 
//     userItems.style.transform = 'translate(0vw)';
// }

// btnFirst.addEventListener("click", btnClick); 
// btnSecond.addEventListener("click", btnClick);
// btnThird.addEventListener("click", btnClick); 
// btnFourth.addEventListener("click", btnClick); 

// trial 2
// function btnClick() {
//     // Move user-items container  +-(100vw) per button-click
//     // if buttons[i] < buttons[i+1] : +100vw, else : -100vw
//     // first button calls itself : imgNext()*number of imgs
//     console.log(typeof(btnAll));
    
    
    
        // if (parseInt(btnAll[0].innerHTML) === 1){
        //     console.log("you are one step closer to solve this problem"); 
        //     userItems.style.transform = 'translate(0vw)';
        // } else if (parseInt(btnAll[1].innerHTML) === 2) {
        //     userItems.style.transform = 'translate(-100vw)'; 
        // } else if (parseInt(btnAll[2].innerHTML) === 3) {
        //     userItems.style.transform = 'translate(-200vw)'; 
        // } else { 
        //     userItems.style.transform = 'translate(-300vw)'; 
        // }
 
    // console.log(parseInt(btnFirst.innerHTML));
    // console.log(btnAll);
    // console.log(parseInt(btnAll[0].innerHTML));
    // imgNext(); 
// }