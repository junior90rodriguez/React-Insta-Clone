import React from 'react'; 

import dummyData from '../dummy-data';
import SearchBar from './SearchBar';
import PostContainer from './PostContainer';


class PostPage extends React.Component {
    constructor(){
    super();
    this.state ={
      //---get data from dummy data and pass it to state---//
        data: []
    }
    }

    componentDidMount() {
    this.setState({data: dummyData})
    }


    render() {
    // console.log(this.state)
    return (
        <div className="App">
            <SearchBar/>
            <div>
            {this.state.data.map(function(info){
            return <PostContainer info={info} key={info.username} />
            })}
            </div>
        </div>
    );
    }  
}

export default PostPage;