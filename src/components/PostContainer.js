import React from 'react';
import CommentSection from './CommentSection';

import './PostContainer.css';
import CommentLike from './CommentLike';

class PostContainer extends React.Component {

    state= {
        newComment: ""
    }

    handleChange = event => {
        this.setState({newComment: event.target.value})  
    }

    handleSubmit = event => {
        // console.log(this.props.info.comments)
    }


    render() {
        console.log(this.props.info.comments)
        // console.log(this.newComment, "event log")
        // console.log(this.props, "post props")
        return (
            <div className="postContainer">
                <div className="head">
                    <div>
                        <img className="thumbNail" src={this.props.info.thumbnailUrl} alt="logo" />
                    </div>
                    <div>
                        <p><strong>{this.props.info.username}</strong></p>
                    </div>    
                </div>
                <div className="body">
                    <img src={this.props.info.imageUrl} alt="profile logo"/>
                </div>
                <div className="footer"> 
                    <CommentLike  likes={this.props.info} />
                    <CommentSection comments={this.props.info.comments} newComment={this.state.newComment}/>
                </div>  
                <form  className="commentform">
                    <input className="commentinput" type="text" value={this.state.newComment} name="addcomment" placeholder="Add a comment" onChange={this.handleChange} />
                </form>
            </div>
        )
    }  
}

export default PostContainer;