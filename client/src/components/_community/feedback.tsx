import * as React from 'react';

export interface  FeedbackProps {
}

export function Feedback (props:  FeedbackProps) {
  return (
    <div>

    <div className="web-editor">
        <h2>Tell Us What You Felt</h2>
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
