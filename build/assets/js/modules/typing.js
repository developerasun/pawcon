// When scroll reaches window.scrollY > 900, start typing
// typing shows one sentence at a time, refreshing when done
// functions : 1) getOneSentence 2) startTyping 3) eraseTyping 4) getNextSentence
// typewriter object
// Create random sentence from promotion texts
export const GetOneSentence = (items) => {
    const randomIdx = Math.floor(Math.random() * items.length);
    return items[randomIdx];
};
// Initiate typewriter effect : 1) start typing 2) erase typing
export const StartTyping = (tw, li, span) => {
    if (tw.position < li.innerText.length) {
        span.innerHTML += li.innerHTML.charAt(tw.position);
        tw.position++;
        setTimeout(() => StartTyping(tw, li, span), tw.speed);
    }
    return tw.position;
};
// Erase what has been typed
export const EraseTyping = (tw, li, span) => {
    if (span.innerHTML.length > 0) {
        span.innerHTML = span.innerHTML.slice(0, span.innerHTML.length - 1);
        setTimeout(() => EraseTyping(tw, li, span), tw.speed - 50);
    }
    // if (span.innerHTML.length === 0) { 
    //     span.innerHTML = "testing string"       
    // }
};
