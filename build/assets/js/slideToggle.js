
const trigger = document.querySelector("#trigger");
const menus = document.querySelectorAll(".navbar-item"); 

function triggerClicked(event) { 
    event.preventDefault(); 
    
    for(i=0; i < menus.length; i++){
        menus[i].classList.add("hidden"); 
    }
}

trigger.addEventListener("click", triggerClicked);