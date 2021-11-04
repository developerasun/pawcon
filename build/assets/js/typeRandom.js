const message = document.querySelector(".message");

// ========================== testing ============================= // 
// create promotion message group array

let test_position = 0; 
const test_speed = 150;

function getRandomMessage() {
    const index = Math.floor(Math.random()*message_group_test.length);
    const randomMessage = message_group_test[index];
    return randomMessage; 
}

const message_group_test = new Array(
    "an unique cat art you create ", 
    "an entertaining hobby ", 
    "a new way to make extra income ");

function myTest() {
    if (test_position < randomMsg.length) {
        message.innerHTML += randomMsg.charAt(test_position);
        test_position += 1; 
        
        setTimeout(myTest, test_speed); 
    }

    if (message.innerHTML.length === randomMsg.length) {
        test_position = 0;
        message.innerHTML = "&nbsp";
    }
}
// ========================== testing ============================= // 

const randomMsg = getRandomMessage();
myTest(randomMsg);