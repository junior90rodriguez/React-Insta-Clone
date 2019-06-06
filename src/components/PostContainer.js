import React from 'react';
import CommentSection from './CommentSection';

function PostContainer(props) {
    return (
        <div className="postContainer">
            <div className="head">
                <img src={props.info.thumbnailUrl} />
                <p>{props.info.username}</p>
            </div>
            <div className="body">
                <img src={props.info.imageUrl} />
            </div>
            <div> 
                <CommentSection />
            </div>  
        </div>
    )
}

export default PostContainer;