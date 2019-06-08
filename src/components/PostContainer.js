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
                    <img className="thumbNail" src={props.info.thumbnailUrl} />
                </div>
                <div>
                     <p><strong>{props.info.username}</strong></p>
                </div>    
            </div>

            <div className="body">
                <img src={props.info.imageUrl} />
            </div>

            <div className="footer"> 
            <CommentLike />
                <CommentSection comments={props.info.comments} />
            </div>  
        </div>
    )
}

export default PostContainer;