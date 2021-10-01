
const trigger = document.querySelector("#trigger");
const navbar = document.querySelector(".navbar");
const navbar_id = document.getElementById("navbar");

function triggerOn(event) { 
    event.preventDefault();

    const testing = document.getElementById("navbar"); 

    if (testing.style.display == "none" & window.innerWidth < 720) {
        testing.style.display = "block";
    } else if (testing.style.display == "none" & window.innerWidth >= 720) {
        testing.style.display = "flex";
    } else {
        testing.style.display = "none";
    }
    
}

trigger.addEventListener("click", triggerOn);

// Disappearing the navigation items
// const menus = document.querySelectorAll(".navbar-item"); 
// for(i=0; i < menus.length; i++){
//     menus[i].classList.add("active"); 
// }