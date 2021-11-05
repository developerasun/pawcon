const subtitle = document.querySelector(".promotion-subtitle");

let test_position = 0; 
const test_speed = 150;

const message_group_test = new Array(
    "an unique cat art you create ", 
    "an entertaining hobby ", 
    "a new way to make extra income ");

function getRandomMessage() {
    const index = Math.floor(Math.random()*message_group_test.length);
    const randomMessage = message_group_test[index];
    return randomMessage; 
}

function myTest() {
    if (test_position < randomMsg.length) {
        subtitle.innerHTML += randomMsg.charAt(test_position);
        test_position += 1; 
        
        setTimeout(myTest, test_speed); 
    } else {
        subtitle.innerHTML = subtitle.innerHTML.slice(0,subtitle.innerHTML.length-1);
        setTimeout(myTest, test_speed); 

        if (subtitle.innerHTML.length === 1) {
            test_position = 1;
        }
    }
}

const randomMsg = getRandomMessage();
myTest(randomMsg);