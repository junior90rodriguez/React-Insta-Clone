import React from 'react';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      //---get data from dummy data and pass it to state---//
      data: dummyData
    }
  }

  render() {
    // console.log(this.state)
    return (
      <div className="App">
      <SearchBar/>
      <div>
        {this.state.data.map(function(info){
          return <PostContainer info={info} />
        })}
      </div>
      </div>
    );
  }  
}

export default App;
