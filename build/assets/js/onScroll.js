// const testing = document.querySelector(".testing"); 
const endCard = document.querySelector(".end-about-developer");
const careers = document.querySelectorAll(".career"); 

// card not shown when load
window.addEventListener("load", ()=>{
    for (let i=1; i<careers.length; i++) {
        careers[i].style.display = "none";
    }
})

// card shown depending on scroll Y moving
window.addEventListener("scroll", ()=>{
    if (window.scrollY > 500) {
        showNthCareers(1)
    }
    if (window.scrollY > 800) {
        showNthCareers(2)
    }
    if (window.scrollY > 1100) {
        showNthCareers(3)
    }
})

const showNthCareers = (nthItem) => {
        careers[nthItem].style.display = "block"
        careers[nthItem].classList.add("active")
}