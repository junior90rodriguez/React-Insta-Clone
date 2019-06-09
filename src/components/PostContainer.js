import React from 'react';
import CommentSection from './CommentSection';

import './PostContainer.css';
import CommentLike from './CommentLike';

function PostContainer(props) {
    console.log(props, "post props")
    return (
        <div className="postContainer">
            <div className="head">
                <div>
                    <img className="thumbNail" src={props.info.thumbnailUrl} alt="logo" />
                </div>
                <div>
                    <p><strong>{props.info.username}</strong></p>
                </div>    
            </div>

            <div className="body">
                <img src={props.info.imageUrl} alt="profile logo"/>
            </div>

            <div className="footer"> 
                <CommentLike  likes={props.info} />
                <CommentSection comments={props.info.comments} />
            </div>  
            <form className="commentform">
                <input className="commentinput" type="text" name="addcomment" placeholder="Add a comment" />
            </form>
        </div>
    )
}

export default PostContainer;