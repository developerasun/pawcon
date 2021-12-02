// const testing = document.querySelector(".testing"); 
const endCard = document.querySelector(".end-about-developer");
const careers = document.querySelectorAll(".career"); 

console.log(endCard.getBoundingClientRect());
console.log(endCard.top);
console.log(careers[1], careers[2], careers[3]); 

// testing.addEventListener("click", (event)=>{
//     event.preventDefault();
// })

// card shown on scroll
window.addEventListener("scroll", ()=>{
    let scrollY = window.scrollY;
    
    if (scrollY > careers[1].getBoundingClientRect().top) {
            careers[1].style.display = "block";
            careers[1].classList.add("active");
        }
    if (scrollY > careers[2].getBoundingClientRect().top) {
            setTimeout(()=> { 
                careers[2].style.display = "block";
                careers[2].classList.add("active");
            }, 500)
    }
    if (scrollY > careers[3].getBoundingClientRect().top) {
            setTimeout(()=>{
                careers[3].style.display = "block";
                careers[3].classList.add("active");
            },1000)
    }
})

// card not shown when load
window.addEventListener("load", ()=>{
    for (let i=1; i<careers.length; i++) {
        careers[i].style.display = "none";
    }
})