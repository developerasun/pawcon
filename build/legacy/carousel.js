// trial 3 : WC3 tutorial (https://www.w3schools.com/howto/howto_js_slideshow.asp)
// difference between addEventListener and onclick 
// addEventListener: can add multiple events to an element - method 
// onclick: can be added to a single element only. can be added 
// in HTML as attribute - property 
// document.getElementById : returns HTML collection(items can be referred with name, id, index)
// document.querySelectorAll : returns NodeList(items only can be referred with index)
const slides = document.querySelectorAll(".artwork");
const bars = document.querySelectorAll(".bar"); 
let slideIndex = 1;

showSlides(slideIndex); 

function showSlides(n){    
    let i; 

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++ ) { 
        slides[i].style.display = 'none';
    }

    for ( i = 0; i < bars.length; i++ ) { 
        bars[i].className = bars[i].className.replace(" clicked", ""); 
        console.log(bars[i].className)
    }

    if (slideIndex < slides.length+1) {
        slideIndex++;
        slides[slideIndex-2].style.display = "block";
        bars[slideIndex-2].className += " clicked";
        setTimeout(showSlides, 3000);
    } else {
        slideIndex = 1;
        showSlides(slideIndex); 
    }
}

function plusSlide(number){
    showSlides( slideIndex += number-1 );
}

function currentSlide(number){
    slideIndex = number-1; 
    showSlides(slideIndex); 
}