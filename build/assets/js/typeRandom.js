const subtitle = document.querySelector(".promotion-subtitle");

let position = 0; 
const speed = 150;

const message_group_test = new Array(
    "an unique cat art you create ", 
    "an entertaining hobby ", 
    "a new way to make extra income ");

function getRandomMessage() {
    const index = Math.floor(Math.random()*message_group_test.length);
    const randomMessage = message_group_test[index];
    return randomMessage; 
}

function paintRandomMessage() {
    if (position < randomMsg.length) {
        subtitle.innerHTML += randomMsg.charAt(position);
        position += 1; 
        
        setTimeout(paintRandomMessage, speed); 
    } else {
        subtitle.innerHTML = subtitle.innerHTML.slice(0,subtitle.innerHTML.length-1);
        setTimeout(paintRandomMessage, speed); 

        if (subtitle.innerHTML.length === 1) {
            position = 1;
        }
    }
}

const randomMsg = getRandomMessage();
paintRandomMessage(randomMsg);