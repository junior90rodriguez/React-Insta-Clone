import React from 'react'; 

import PostPage from './components/PostPage';
import withAuthenticate from './components/Authentication';


const ComponentFromWithAuthenticate = (PostPage);

class App extends React.Component {
  constructor(){
    super();
    this.state ={
    
  }}


  render() {
    // console.log(this.state)
    return (
      <div className="App">
      <ComponentFromWithAuthenticate />
      </div>
    );
  }  
}

export default App;
