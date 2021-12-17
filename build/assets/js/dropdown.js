const createDrops = document.querySelector(".create-drops")
const createDropsItem = document.querySelector(".create-drops-item")

createDrops.addEventListener("mouseenter", ()=>{ 
    createDropsItem.classList.remove("hidden")
})

createDrops.addEventListener("mouseleave", ()=>{
    createDropsItem.classList.add("hidden")
})