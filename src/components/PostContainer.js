import React from 'react';
import CommentSection from './CommentSection';

import './PostContainer.css';

function PostContainer(props) {
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

            <div> 
                <CommentSection />
            </div>  
        </div>
    )
}

export default PostContainer;