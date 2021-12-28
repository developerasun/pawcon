import { StartTyping, EraseTyping, GetOneSentence, Typewriter } from './typing.js'

const promoTexts = document.querySelectorAll(".text-container>li") as NodeListOf<HTMLLIElement>
const showTyping = document.querySelector(".showTyping") as HTMLSpanElement

window.addEventListener("load", ()=>{
    promoTexts.forEach((item)=>{
        item.style.display = "none"
    })
})

const sentence = GetOneSentence(promoTexts)
const typewriterSetting: Typewriter = { position: 0, speed : 150 }

function InitTypewriter() {
    StartTyping(typewriterSetting, sentence, showTyping)
}

// initiate type effect with random sentence
InitTypewriter()
setTimeout(()=>EraseTyping(typewriterSetting, sentence, showTyping), 7000)
