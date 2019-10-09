import React from 'react';
import menu from '../data.js'
import {NavLink} from 'react-router-dom';

const SubNav = (props) => {
    const subNav = menu.find(link => link.title === props.match.params.menuLink)
    console.log(subNav);
    return (
        <div className='sub-nav-wrapper'>
            {subNav.subMenu.map(subLink => (<NavLink className='sub-nav' to='/'>{subLink.name}</NavLink>))}
        </div>
    )
}

export default SubNav;