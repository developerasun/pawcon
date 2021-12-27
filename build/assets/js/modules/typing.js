// When scroll reaches window.scrollY > 900, start typing
// typing shows one sentence at a time, refreshing when done
// functions : 1) getOneSentence 2) startTyping 3) eraseTyping 4) getNextSentence
// typewriter object
export const GetOneSentence = (items) => {
    const randomIdx = Math.floor(Math.random() * items.length);
    return items[randomIdx];
};
export const StartTyping = (tw, li, span) => {
    if (tw.position < li.innerText.length) {
        span.innerHTML += li.innerHTML.charAt(tw.position);
        tw.position++;
        setTimeout(() => { StartTypingWrapper(tw, li, span); }, tw.speed);
    }
    else {
        EraseTypingWrapper(tw, li, span);
    }
};
const StartTypingWrapper = (tw, li, span) => {
    StartTyping(tw, li, span);
};
const EraseTyping = (tw, li, span) => {
    if (span.innerHTML.length > 0) {
        span.innerHTML = span.innerHTML.slice(0, span.innerHTML.length - 1);
        setTimeout(() => EraseTypingWrapper(tw, li, span), tw.speed - 100);
    }
};
const EraseTypingWrapper = (tw, li, span) => {
    EraseTyping(tw, li, span);
};
