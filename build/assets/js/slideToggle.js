const trigger = document.querySelector("#trigger");
const navbar = document.querySelector(".navbar"); 
const menu_icon = document.querySelector("#trigger .menu-icon");
const menuText = document.createElement("span");

const TRIGGER_MENU = "MENU";
const TRIGGER_HIDE = "HIDE"; 
const CLASS_ACITVE = "active"; 
const CLASS_INACTIVE = "hidden"; 

function triggerOn(event) { 
    event.preventDefault();

    if (menuText.innerHTML  === TRIGGER_MENU) {
        console.log("tirgger clicked"); 
        menuText.innerHTML = TRIGGER_HIDE;
        
        navbar.classList.add(CLASS_ACITVE); 

    } else { 
        console.log("trigger clicked again");
        menuText.innerHTML = TRIGGER_MENU;
        navbar.classList.remove(CLASS_ACITVE);
        navbar.classList.add(CLASS_INACTIVE);
    }
}

menuText.innerHTML = TRIGGER_MENU;
trigger.prepend(menuText);
trigger.addEventListener("click", triggerOn);



// trial 1 
// Disappearing the navigation items
// const menus = document.querySelectorAll(".navbar-item"); 
// for(i=0; i < menus.length; i++){
//     menus[i].classList.add("active"); 
// }

// navbar.classList.add("active")

// trial 2 
// const testing = document.getElementById("navbar"); 

    // if (testing.style.display == "none" & window.innerWidth < 720) {
    //     testing.style.display = "block";
    // } else if (testing.style.display == "none" & window.innerWidth >= 720) {
    //     testing.style.display = "flex";
    // } else {
    //     testing.style.display = "none";
    // }

// trial 3
// const menus = document.querySelectorAll(".navbar-item"); 
// for(i=0; i < menus.length; i++){
    //     menus[i].classList.remove("active"); 
    //     menus[i].classList.add("hidden");
    // }