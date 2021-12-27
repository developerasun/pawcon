// When scroll reaches window.scrollY > 900, start typing
// typing shows one sentence at a time, refreshing when done
// functions : 1) getOneSentence 2) startTyping 3) eraseTyping
// typewriter object
export const GetOneSentence = (items) => {
    const randomIdx = Math.floor(Math.random() * items.length);
    return items[randomIdx];
};
export const StartTyping = (tw, li, span) => {
    if (tw.position < li.innerText.length) {
        span.innerHTML += li.innerText.charAt(tw.position);
        tw.position++;
        setTimeout(() => { TypingWrapper(tw, li, span); }, tw.speed);
    }
};
const TypingWrapper = (tw, li, span) => {
    StartTyping(tw, li, span);
};
const EraseTyping = () => { };
