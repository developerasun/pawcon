const trigger = document.querySelector("#trigger");
const bars = document.querySelector(".bars");
const cancel = document.querySelector(".cancel");
const navigation = document.querySelector(".navigation");
const CLICKED = "clicked";
const HIDDEN = "hidden";
const ROTATE_REVERSE = "rotate-reverse";

bars.addEventListener("click", ()=>{
    bars.classList.add(CLICKED);
    setTimeout(()=>{
        bars.classList.add(HIDDEN);
        cancel.classList.remove(HIDDEN);
        cancel.classList.add(ROTATE_REVERSE);
    },200);
    
    setTimeout(()=>{
        navigation.classList.remove(HIDDEN)
    }, 200);
});

cancel.addEventListener("click", ()=>{
    cancel.classList.remove(ROTATE_REVERSE);
    cancel.classList.add(HIDDEN);
    navigation.classList.add(HIDDEN);
    bars.classList.remove(HIDDEN);
});