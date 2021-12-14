const EditorJs = require('@editorjs/editorjs')
const Header = require('@editorjs/header')
const SimpleImage = require('@editorjs/simple-image')

const submitBtn = document.querySelector(".submitBtn")
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