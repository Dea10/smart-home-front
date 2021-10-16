import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <NavLink
                        activeClassName='active'
                        className='nav-item nav-link'
                        exact
                        to='/'
                    >
                        Home
                    </NavLink>
                </ul>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav">
                        <NavLink
                            activeClassName='active'
                            className='nav-item nav-link'
                            exact
                            to='/about'
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            activeClassName='active'
                            className='nav-item nav-link'
                            exact
                            to='/settings'
                        >
                            Settings
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
