import { StartTyping, EraseTyping, GetOneSentence } from './typing.js';
const promoTexts = document.querySelectorAll(".text-container>li");
const showTyping = document.querySelector(".showTyping");
window.addEventListener("load", () => {
    promoTexts.forEach((item) => {
        item.style.display = "none";
    });
});
const sentence = GetOneSentence(promoTexts);
const typewriterSetting = { position: 0, speed: 150 };
function InitTypewriter() {
    StartTyping(typewriterSetting, sentence, showTyping);
}
// initiate type effect with random sentence
InitTypewriter();
setTimeout(() => EraseTyping(typewriterSetting, sentence, showTyping), 7000);
