import * as React from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';

export function Feedback () {
    const [submit, setSubmit] = React.useState(false)
    const [save, setSave] = React.useState(false)

    // 1) editor js should be inside component so that id missing error won't happen
    // 2) it should be stored in useMemo hook so that it would not render multiple times
    const editor = React.useMemo(() => {
        return new EditorJS({
            holder : 'pawconEditor',
            autofocus: true,
            placeholder: 'Use tab key for toolbox', 
            readOnly: false, // set active as fetched
            onReady: () => console.log("editor js is good to go"), 
            tools: {
                header: {
                    class: Header,
                    inlineToolbar : true
                },
            }, 
        })  
    }, [ ]) // render once
    
    const handleClick = (event : React.FormEvent) => { 
        event.preventDefault()
        setSave(true)
    }
    const handleSubmit = (event : React.FormEvent) => {
        event.preventDefault()
        setSubmit(true)
    }

    // Render editor js once. 
    React.useEffect(() => {    
        if (submit) {
            setSubmit(false) // make it resubmittable
            setSave(false) // reset button disable

            if(window.confirm("Save and submit this feedback?")) {
                // save all entry data from Editor.js
                editor.save().then((result) => {
                    // editorjs.blocks : object containing arrays
                    // console.log(result.blocks[0].data.text) // one block in editor js
                    const texts = [ ]
                    for (let i=0; i < Object.keys(result.blocks).length; i++) {
                        // get each block's text
                        texts.push(result.blocks[i].data.text)
                    }
                    const onePost = texts.join(" ")
                    console.log(onePost) // combined paragraphs
    
                    // save feedbacks to database
                    fetch('/community', {
                        method: 'POST', 
                        body: JSON.stringify({onePost}), 
                        headers: { 'Content-Type' : 'application/json' }
                    })
                    .then((res) => { return res.json })
                    .then((data) => {
                        console.log(JSON.stringify(data))
                    })
                }).catch((err) => console.log(err))

            }
        }
    }, [ submit ])

  return (
    // form submission should be done in form tag, not button
    <form className="webEditorForm" onSubmit={(event) => handleSubmit(event)}>
        <div className="title">
            <p>Tell Us What You Felt</p>
        </div>

        <div className="editorContainer">
            <div id='pawconEditor'></div>
        </div>

        <div className="buttons">
            <button 
                disabled ={editor ? false : true }
                className="saveButton" 
                onClick={handleClick}>Exit edit</button>
            <button 
                disabled={save ? false : true }
                className="submitButton" 
                type='submit'>Submit</button>
        </div>
    </form>
  );
}
