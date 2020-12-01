import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './style.css';

const NavBar = ({ history }) => {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/about" activeClassName="active">About</NavLink>
            <NavLink to="/search" activeClassName="active">Search</NavLink>
            <button onClick={history.goBack}>Back</button>
        </nav>
    );
}

export default withRouter(NavBar);
