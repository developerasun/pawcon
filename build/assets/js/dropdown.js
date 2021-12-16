const createDrops = document.querySelector(".create-drops")
const createDropsItem = document.querySelector(".create-drops-item")

createDrops.addEventListener("click", ()=>{ 
    createDropsItem.classList.remove("hidden")
})