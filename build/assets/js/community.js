import { getRandomJSON } from './ajax/fetch.js'

// table CRUD
const getBtn = document.querySelector(".getBtn")
const saveBtn = document.querySelector(".saveBtn")
let count = 0
let dummies 

// getRandomJSON is asynchronous func, returning a Promise
getRandomJSON().then((data) => { 
    dummies = data
    return data 
}).catch( (err) => { return err })

function Wrapper() {
    Trigger(dummies)
}

function Trigger(data) { 
    const tBody = document.querySelector("tbody")

    if (count < 1) {
        for (let i=0; i<Object.keys(data).length; i++) { 
            const row = tBody.insertRow()
            row.innerHTML = `
                             <td>${i+1}</td>
                             <td>${data.title}</td>
                             <td>${data.userId}</td>
                             <td>${data.completed}</td>`}
        count++
    } else { 
        alert("Only 1 dummy available!")
        if (confirm("Delete the dummy?")) {
            for (let j=0; j<tBody.rows.length; j++) {
                tBody.rows.item(j).innerHTML = ""
            }
            count = 0
        }
    }
}

getBtn.addEventListener("click", Wrapper)
saveBtn.addEventListener("click", ()=>{ 
    alert("this function on the way")
})


