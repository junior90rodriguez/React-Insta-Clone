import React from 'react';

import "./CommentSection.css";

function CommentSection (props) {
    console.log(props, "comment section props")
    return(
        <div className="commentSection">
           {props.comments.map(function(comment) {
               return(
                   <>
                   <div className="commentContainer">
                   <div className="username">
                    <p>{comment.username}</p>
                   </div>
                   <div>
                     <p>{comment.text}</p>
                   </div>
                   </div>
                   
                   </>
               )
           })}
        </div>
    )
} 

export default CommentSection;