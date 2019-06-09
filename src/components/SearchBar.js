import React from 'react';

import IgLogo from '../images/iglogo.svg';
import IgWord from '../images/igword.svg';
import Compass from '../images/compass.svg';
import Heart from '../images/heart.svg';
import Person from '../images/profile.svg';

import './SearchBar.css';

function SearchBar() {
    return(
        <div className="searchBarContainer">
            <div className="logo">
                <img className='igLogo' src={IgLogo} alt="instagram logo"/>
                <div className="dv"></div>
                <img className='igWord' src={IgWord} alt="instagram lettering"/>  
            </div>
                <form className="searchform">
                    <input className ="searchinput" type='text' placeholder='Search' />  
                </form> 
            <div className="icons">
                <img className='icon' src={Compass} alt="compass" />
                <img className='icon' src={Heart} alt="heart"/> 
                <img className='icon' src={Person} alt="person"/>
            </div>
        </div>
    )
}

export default SearchBar;