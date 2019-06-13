import React from 'react';
import IgWord from '../images/igword.svg';

import './LogIn.css';

function LogIn(props) {
    return(
        <div className="logIn-container">
            <img src={IgWord} />
            <p>Sign up to see photos and videos from your friends.</p>
            <form>
                <input type="text" placeholder="Mobile Number or Email" />
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Password" /> 
            </form>
        </div>
    )
}

export default LogIn;