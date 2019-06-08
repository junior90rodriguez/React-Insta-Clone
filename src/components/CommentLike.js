import React from 'react';
import Heart from '../images/heart.svg';
import Comment from '../images/comment.svg';

function CommentLike() {
    return(
        <div classNam="commentLike">
            <div className="iconContainer">
            <div className="likeComment">
                <img className="actionicon" src={Heart} />
                <img className="actionicon" src={Comment} />
            </div>
        </div>
        </div>
    )
}

export default CommentLike;