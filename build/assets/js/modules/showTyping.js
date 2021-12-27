import { StartTyping, GetOneSentence } from './typing.js';
const promoTexts = document.querySelectorAll(".text-container>li");
const showTyping = document.querySelector(".showTyping");
window.addEventListener("load", () => {
    promoTexts.forEach((item) => {
        item.style.display = "none";
    });
});
const typewriterSetting = { position: 0, speed: 150 };
const sentence = GetOneSentence(promoTexts);
// initiate type effect with random sentence
if (window.scrollY > 1100) {
    StartTyping(typewriterSetting, sentence, showTyping);
}
