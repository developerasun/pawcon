const promotionFirstTitle = document.querySelector(".promotion-para-first-title"); 
const promotionMessages = document.querySelectorAll(".message");

// promotion text group
const promotionText = {
    title: "Here in Meow Canvas, you can find",
    first:"an unique cat art you create",
    second:"an entertaining hobby",
    third:"a new way to make extra income"
};

const SPEED = 150;
let position = 0;
let msg_position = 0;

// initialize type effect on title
function initTypewriter() {    
    // string.charAt() : Returns the character at the specified index.
    
    if (position < promotionText.title.length) {
        promotionFirstTitle.innerHTML += promotionText.title.charAt(position);
        position++;
        setTimeout(initTypewriter, SPEED);
    } 
    // promotionFirstTitle.classList.add("reachedEnd");
}

// type effect on message 
function typeMessage() {
    if (msg_position < promotionText.first.length) {
        promotionMessages[0].innerHTML += promotionText.first.charAt(msg_position);
        msg_position++;
        setTimeout(typeMessage, SPEED);
    }
}

// initialize type effect on messages
function initMessage() {
    if (promotionFirstTitle.className === "reachedEnd") {
        setTimeout(()=> {

        }, 1000);
    }
}

initTypewriter();
typeMessage();
