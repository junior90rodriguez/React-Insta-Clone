import React from 'react';

function PostContainer(props) {
    return (
        <div>
        <img src={props.info.thumbnailUrl} />
            <p>{props.info.username}</p>
            <img src={props.info.imageUrl} />
        </div>
    )
}

export default PostContainer;