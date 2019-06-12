import React from 'react';
import Heart from '../images/heart.svg';
import Comment from '../images/comment.svg';

function CommentLike(props) {
    // console.log(props, 'likes props')
    return(
        <div className="commentLike">
                <div className="iconContainer">
                <div className="likeComment">
                    <img className="actionicon" src={Heart} alt="heart icon" />
                    <img className="actionicon" src={Comment} alt="comment buuble" />
                </div>
                <div className="likes">
                    <p><strong>{props.likes.likes} likes</strong></p>
                    <p>{props.likes.timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default CommentLike;