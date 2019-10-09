import React from 'react';
import menu from '../data.js'
import {Route, NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Nav = (props) => {

    const links = ['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'Support'];

    console.log(menu);

    return (
        <div>
            <div className='background'>
                <div className='nav-wrapper'>
                    <NavLink className ='home-button' exact to='/'>
                        <FontAwesomeIcon icon={['fab', 'apple']}/>
                    </NavLink>
                    {menu.map(link =>(<NavLink key={link.index} activeClassName='selected' className='nav-items' exact to={`/${link.title}`}>{link.title}</NavLink>))}
                </div>
            </div>
        </div>
    );
}

export default Nav;