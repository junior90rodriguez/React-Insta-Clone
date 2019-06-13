import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LogIn from './components/LogIn'



import './index.css';
import withConditionalRender from './components/withConditionalRender';

const DynamicComp = withConditionalRender(App)(LogIn);

class  Application extends React.Component {
    state = {
        showFirst: true
    };

    logIn = e => {
        e.preventDefault();
        if(localStorage.getItem('showFirst')) {
            localStorage.removeItem('showFirst');
            this.setState({ showFirst: false });
        } else {
            localStorage.setItem('showFirst', true);
            this.setState({ showFirst: true })
        }
    };
    
    render() {
        return(
        <div>
        <DynamicComp />
        <button onClick={this.logIn}>LogIn</button>
            {/* <App /> */}
        </div>
    )
    }
    }
    

ReactDOM.render(<Application />, document.getElementById('root'));


