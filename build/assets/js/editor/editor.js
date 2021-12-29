const EditorJs = require('@editorjs/editorjs')
const Header = require('@editorjs/header')
const SimpleImage = require('@editorjs/simple-image')
const editorDisplay = document.querySelector(".editorDisplay")
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

// Below codes not tested yet : 2021.12.29 written
// button clicked => start post saving process
submitBtn.addEventListener("click", ()=>{
    editor.save() // returns an editor.js post object( per paragraph/block) : data.blocks[i].data.text
          .then((result)=> {
            // iterate blocks array and save as one array
            const allParagraphs = result.blocks.map((item, idx) => item[idx].data.text )

            // Join the array to make them one text
            const oneEditorPost = allParagraphs.join(" ")

            // Display the text in HTML
             editorDisplay.innerText += oneEditorPost
          });
})