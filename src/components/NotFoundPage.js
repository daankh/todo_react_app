import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <p>Page not found - 404</p>
            <p>
                <NavLink to="/">Go back to home page</NavLink>
            </p>
        </div>
    )
}

export default NotFoundPage