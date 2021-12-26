"use strict";
const textContainer = document.querySelector(".text-container");
const promoTexts = document.querySelectorAll(".promotion-texts>li");
// When scroll reaches window.scrollY > 900, start typing
// typing shows one sentence at a time, refreshing when done
// const StartTyping = <T extends HTMLLIElement>(pos:number, li:T) => { 
// }
window.addEventListener("load", () => {
    textContainer.style.display = "none";
});
window.addEventListener("scroll", () => {
    if (window.scrollY > 900) {
        console.log("hello");
    }
});
