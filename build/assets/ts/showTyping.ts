import { StartTyping, GetOneSentence, Typewriter } from './typing.js'

const promoTexts = document.querySelectorAll(".text-container>li") as NodeListOf<HTMLLIElement>
const showTyping = document.querySelector(".showTyping") as HTMLSpanElement

window.addEventListener("load", ()=>{
    promoTexts.forEach((item)=>{
        item.style.display = "none"
    })
})

const typewriterSetting: Typewriter = { position: 0, speed : 150 }
const sentence = GetOneSentence(promoTexts)

// initiate type effect with random sentence
    if (window.scrollY > 1100) { 
        StartTyping(typewriterSetting, sentence, showTyping)
    }