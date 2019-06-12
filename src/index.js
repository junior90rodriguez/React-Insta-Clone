import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const Application = function() {
    return(
        <div>
            <App />
        </div>
    )
}

ReactDOM.render(<Application />, document.getElementById('root'));


