const header = document.querySelector("header")
const dropDownItem = document.querySelector(".dropdown-item")

header.addEventListener("mouseenter", ()=>{
    dropDownItem.classList.remove("hidden")
    dropDownItem.classList.add("dropdown")
})

header.addEventListener("mouseleave", ()=>{
    dropDownItem.classList.remove("dropdown")
    dropDownItem.classList.add("hidden")
})
