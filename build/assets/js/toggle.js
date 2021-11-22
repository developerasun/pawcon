const trigger = document.querySelector("#trigger");
const bars = document.querySelector(".bars");
const cancel = document.querySelector(".cancel");
const navigation = document.querySelector(".navigation");

bars.addEventListener("click", ()=>{
    bars.classList.add("clicked");
    setTimeout(()=>{
        bars.classList.add("hidden");
        cancel.classList.remove("hidden");
        cancel.classList.add("active");
    },1000);
    
    setTimeout(()=>{
        navigation.classList.remove("hidden")
    }, 1000);
});

cancel.addEventListener("click", ()=>{

});