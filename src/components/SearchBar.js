import React from 'react';

import IgLogo from '../images/iglogo.svg';
import IgWord from '../images/igword.svg';
import Compass from '../images/compass.png';
import Heart from '../images/heart.png';
import Person from '../images/person.png';

function SearchBar() {
    return(
        <div className="searchBarContainer">
            <div className="logo">
                <img src={IgLogo}/>
                <img src={IgWord}/>  
            </div>
                <form>
                    <input type='text' placeholder='Search' />  
                </form> 
            <div className="icons">
                <img src={Compass} />
                <img src={Heart} />
                <img src={Person} />
            </div>
        </div>
    )
}

export default SearchBar;