import React, {useState} from 'react';
import Nav from './Nav.js';
import menu from '../data.js';
import SubNav from './SubNav';
import {NavLink, Route} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const NavWrapper = () => {

    return (
        <div>
            <Nav/>
            <div className='sub-nav-background'>
                <Route exact path ='/:menuLink' render ={props => (<SubNav {...props}/>)}/>
            </div>
        </div>
    );
}

export default NavWrapper;