import * as React from 'react';
// As of 2022 Jan, Typescript only support editor js and its header.
import EditorJS from '@editorjs/editorjs';
import EditorJSHeader from '@editorjs/header';

export function Feedback () {
    const editor = new EditorJS({
        holder : 'editorjs',
        tools : {
            header : {
                class : EditorJSHeader
            }
        }
    })
  return (
    <div>

    <div className="web-editor" style={{"maxWidth" : "50%", "margin":"0 auto"}}>
        <h2>Tell Us What You Felt</h2>
        {/* fix bugs that editor js renders twice. */}
        <div id="editorjs"></div>
        <button className="submitBtn">Submit</button>
    </div>
    
    <div className="notice">
        <h2 className="title">See Reviews Here</h2>
        <div className="searchBox">Search bar here</div>
        <table className="table">
            <thead>
                <tr>
                    <td>Number</td>
                    <td>Title</td>
                    <td>UserId</td>
                    <td>Posted</td>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
        
        <div className="pagination">Pagination here</div>

    </div>
    
    </div>
  );
}
