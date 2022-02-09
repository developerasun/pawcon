import * as React from 'react';
// As of 2022 Jan, Typescript only support editor js and its header.
import EditorJS from '@editorjs/editorjs';
import EditorJSHeader from '@editorjs/header';


// Split Editor js rendering component and Editor js post request component

// editor instance should be outside component/useEffect hook
// if inside useEffect hook => throw Promise error once submitted
// if in component => thorw missing dependency
const editor = new EditorJS({
    holder : 'editorjs',
    tools : {
        header : {
            class : EditorJSHeader
        }
    }
})

export function Feedback () {
    const [submit, setSubmit] = React.useState(false)
    localStorage.setItem('fisrtLoad', 'true')

    const handleSubmit = (event : React.FormEvent) => {
        event.preventDefault()
        setSubmit(true)
    }

    // Render editor js once. 
    React.useEffect(() => {

    // NOT DONE : editor js is rendered after page is refreshed.
        if (submit) {
            // To get all entry's data from Editor.js, call the save() method on the class instance. 
            // It will return a Promise that resolves with clean data.
            editor.save().then((result) => {
                // editorjs.blocks : object containing arrays
                console.log(result.blocks[0].data.text) // one block in editor js

                const texts = [ ]
                for (let i=0; i < Object.keys(result.blocks).length; i++) {
                    // get each block's text
                    texts.push(result.blocks[i].data.text)
                }
                const feedbacks = texts.join(" ")
                console.log(feedbacks) // combined paragraphs
                // save feedbacks to database
                fetch('/blog', {
                    method: 'POST', 
                    body: JSON.stringify({feedbacks}), 
                    headers: { 'Content-Type' : 'application/json' }
                })
            }).catch((err) => console.log(err))
        }
    }, [ submit ] )

  return (
    // form submission should be done in form tag, not button
    <form className="web-editor" onSubmit={(event) => handleSubmit(event)}>
        <h2>Tell Us What You Felt</h2>
        <h3>Use tab key for Heading</h3>
        <div id="editorjs"></div>
        <button className="submitFeedback" type='submit'>Submit</button>
    </form>
  );
}
