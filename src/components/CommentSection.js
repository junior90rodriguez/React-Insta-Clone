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
                    <p><strong>{comment.username}</strong></p>
                   </div>
                   <div className="comment">
                     <p>{comment.text}</p>
                   </div>
                   <div>
                        <form type="text" name="addcomment" placeholder="Add a comment" />
                   </div>
                   </div>
                   
                   </>
               )
           })}
        </div>
    )
} 

export default CommentSection;