import React from 'react';

import dummyData from './dummy-data';
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
      </div>
    );
  }  
}

export default App;
