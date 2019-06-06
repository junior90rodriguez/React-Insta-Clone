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
                <img className='igLogo' src={IgLogo}/>
                <img className='igWord' src={IgWord}/>  
            </div>
                <form>
                    <input type='text' placeholder='Search' />  
                </form> 
            <div className="icons">
                <img className='compass' src={Compass} />
                <img className='heart' src={Heart} />
                <img className='person' src={Person} />
            </div>
        </div>
    )
}

export default SearchBar;