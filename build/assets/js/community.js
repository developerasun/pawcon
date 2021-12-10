import EditorJs from '@editorjs/editorjs'; 

const Header = require('@editorjs/header');
const SimpleImage = require('@editorjs/simple-image');
const submitBtn = document.querySelector(".submitBtn"); 

// declare a new editor from Editor.js
const editor = new EditorJs( {
    holder: 'editorjs', 
    tools: {
        image : SimpleImage,
        header : {
            class : Header, 
            shortcut: 'CONTROL+H',
            config : {
                placeholder : 'Enter a header',
                levels : [2,3,4],
                defaultLevel : 2
            }
        }
    }
});

// connect backend & database later to save a post 
submitBtn.addEventListener("click", function(){
    editor.save().then((result)=>{
        console.log([...result.blocks]);
    }).catch((err)=>{
        console.log(err)
    })
});

// table CRUD
const getBtn = document.querySelector(".getBtn")
let count = 0
const dummies = [
    {"title":"How to learn javascript", "author": "Jake", "posted":"1995.02.02"},  
    {"title":"What is a community?", "author": "Smith", "posted":"1900.10.22"},  
    {"title":"Why cat always sleeps", "author": "Elly", "posted":"1896.06.19"},  
    {"title":"111 secrents you never knew", "author": "Brian", "posted":"1200.01.30"},  
    {"title":"Mermaid story", "author": "Paul", "posted":"1995.04.22"},  
]

function Wrapper() {
    Trigger(dummies)
}

function Trigger(data) { 
    const tBody = document.querySelector("tbody")

    if (count < 3) {
        for (let i=0; i<data.length; i++) { 
            const row = tBody.insertRow()
            row.innerHTML = `
                             <td>${i+1}</td>
                             <td>${data[i].title}</td>
                             <td>${data[i].author}</td>
                             <td>${data[i].posted}</td>
                            `
        }
        count++
    } else { 
        alert("Only 3 dummies available!")
        for (let j=0; j<tBody.rows.length; j++) {
            tBody.rows.item(j).innerHTML = ""
        }
        count = 0
    }
}

getBtn.addEventListener("click", Wrapper)