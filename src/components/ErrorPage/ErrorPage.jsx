import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <p>Opps ! Page Not Found</p>
            <NavLink to="/">
                <button className='m-4'>GO Back</button>
            </NavLink>
        </div>
    );
};

export default ErrorPage;