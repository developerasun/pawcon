const promotionFirstTitle = document.querySelector(".promotion-title-first");

// create a typewriter object
const typewriter = {
    position : 0, 
    speed : 150
}

// create promotion message variables
const text_title = "Here in Meow Canvas, You will find: ";

function typeEffect() {
    if (typewriter.position <= text_title.length) { 
        promotionFirstTitle.innerHTML += text_title.charAt(typewriter.position);
        typewriter.position ++;
        
        setTimeout(typeEffect, typewriter.speed); 
    } 
}

typeEffect();


// third try 
// create a type effect function
// function typeEffect() {

//         for (key in text_group) {
//             // console.log(text_group[key]);
//             if (key === "title") {
//                 promotionFirstTitle.innerHTML += text_group["title"].charAt(typewriter.position);
//                 typewriter.position += 1;

//                 setTimeout(typeEffect, typewriter.speed); 
//             } else {
//                 promotionMessages[0].innerHTML += text
//             }


//         }

//         // if (typewriter.position < text_title[i].length) { 
//         //     promotionFirstTitle.innerHTML += text_title[i].charAt(typewriter.position);
//         //     typewriter.position += 1;
    
//         //     setTimeout(typeEffect, typewriter.speed); 
//         // }
// }

// create a typewriter init function
// function initTypewriter() {
//     let count = 5;
//     while (count > 0) {
//         setInterval(typeEffect, 1000);
//         count--;;
//     }
// }

// typeEffect();
// first try 
// const SPEED = 150;
// let position = 0;
// let msg_position = 0;

// // initialize type effect on title
// function initTypewriter() {    
//     // string.charAt() : Returns the character at the specified index.
    
//     if (position < promotionText.title.length) {
//         promotionFirstTitle.innerHTML += promotionText.title.charAt(position);
//         position++;
//         setTimeout(initTypewriter, SPEED);
//     } 
//     // promotionFirstTitle.classList.add("reachedEnd");
// }

// // type effect on message 
// function typeMessage() {
//     if (msg_position < promotionText.first.length) {
//         promotionMessages[0].innerHTML += promotionText.first.charAt(msg_position);
//         msg_position++;
//         setTimeout(typeMessage, SPEED);
//     }
// }

// // initialize type effect on messages
// function initMessage() {
//     if (promotionFirstTitle.className === "reachedEnd") {
//         setTimeout(()=> {

//         }, 1000);
//     }
// }

// initTypewriter();
// typeMessage();



// second try 
// Object : typewriter(speed, position), message group
// funciton : applyTypeEffect(), initTypewriter()
// const typewriter = {
//     position:0, 
//     speed:200
// }; 

// // promotion text group
// const promotionText = {
//     title:  "Here in Meow Canvas, you can find",
//     first:  "an unique cat art you create",
//     second: "an entertaining hobby",
//     third:  "a new way to make extra income"
// };

// console.log(Object.keys(promotionText)[0]);

// function typeEffect() {
//     if (typewriter.position < this[Object.keys(this)[0]].length) {
//         promotionFirstTitle.innerHTML += this[Object.keys(this)[0]].charAt(typewriter.position);
//         typewriter.position += 1;

//         setTimeout(typeEffect, typewriter.speed);
//     }
// }

// typeEffect(promotionText);