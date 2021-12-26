import { IncreaseToTarget } from './counter.js';
const display = document.querySelector(".display"); // type casting
const dataTarget = display.getAttribute('data-target');
const counterSetting = {
    target: parseInt(dataTarget),
    count: 0,
    speed: 10,
    display: display
};
IncreaseToTarget(counterSetting);
// initiate
window.addEventListener("load", () => {
    const counter = document.querySelector(".counter");
    setTimeout(() => {
        counter.style.display = "block";
        display.classList.add("active");
        IncreaseToTarget(counterSetting);
    }, 2000);
});
