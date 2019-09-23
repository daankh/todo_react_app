import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => (
    <nav>
        <NavLink to='/' exact={true}>Home</NavLink>
        <NavLink to='/list' >Todos list</NavLink>
    </nav>
);

export default Navigation;