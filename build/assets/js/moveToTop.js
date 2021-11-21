const moveToTop = document.querySelector(".moveToTop");
let clicked = false;

moveToTop.addEventListener("click", ()=>{
    moveToTop.classList.add("click");
    clicked = true;

    if (clicked) {
        window.scrollTo({
            left:0, 
            top:0,
            behavior:"smooth"
        });
        setTimeout(()=>{
            moveToTop.classList.remove("click");
        },1000)
    }
});