import { StartTyping, GetOneSentence } from './typing.js'

const promoTexts = document.querySelectorAll(".text-container") as NodeListOf<HTMLLIElement>
const showTyping = document.querySelector(".showTyping") as HTMLSpanElement

window.addEventListener("load", ()=>{
    promoTexts.forEach((item)=>{
        item.style.display = "none"
    })
})

const sentence = GetOneSentence(promoTexts)
StartTyping({ position : 0, speed : 150 }, sentence, showTyping)

window.addEventListener("scroll", ()=>{
    if (window.scrollY > 900) { 
        promoTexts[0].style.display = "block"
        console.log("hi")
    }
})
