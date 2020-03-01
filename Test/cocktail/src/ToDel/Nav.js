import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav(){
// const navStyle = [
//     color: 
// ]

    return(
        <nav>
            <h3>logo</h3>
            <u1 className='nav-links'>
                <Link to="/about">
                <li>About</li>
                </Link>
                <Link to='/shop'>
                <li>Shop</li>
                
                </Link>
            </u1>
        </nav>
    )
}

export default Nav;