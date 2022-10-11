import React from "react";
import Logo from "../../assets/images/logo.png";
import UrlImage from "../main/UrlImage";
import { Link } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi';
import PropTypes from 'prop-types';
import ToggleTheme from "./ToggleTheme";
import { ThemeConsumer } from "../../contexts/ThemeContext";

function AppBar({ logout, name }) {
    return (
        <ThemeConsumer>
            {({ theme }) => {
                return (
                    <nav 
                        className={`navbar navbar-expand-lg navbar-${theme} bg-${theme === 'white' ? 'dark' : 'white'} fixed-top`}>
                        <div className="container d-flex">
                            <Link className="navbar-brand mx-3 flex-grow-1" to="/">
                                <UrlImage
                                urlImg={Logo} 
                                alt={"Logo Personal Notes App"} 
                                width="50" 
                                height="50" 
                                className="d-inline-block align-center" />
                            </Link>
                            <button
                            className={`navbar-toggler bg-${theme}`}
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarNavAltMarkup" 
                            aria-controls="navbarNavAltMarkup" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation">
                            <span className='navbar-toggler-icon'></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                                <div className="navbar-nav ">
                                    <Link className={`nav-link me-4 fw-bold text-${theme}`} to="/">Home</Link>
                                    <Link className={`nav-link me-4 fw-bold text-${theme}`} to="/menus">Menus</Link>
                                    <Link className={`nav-link me-4 fw-bold text-${theme}`} to="/notes">Notes</Link>
                                    <Link className={`nav-link me-4 fw-bold text-${theme}`} to="/archived">Archived</Link>
                                </div>
                            </div>
                            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <ToggleTheme />
                                    <button className="btn btn-link nav-link text-danger fw-bold" onClick={logout}>{name} <FiLogOut /></button>
                                </div>
                            </div>
                        </div>
                    </nav>
                )
            }}
        </ThemeConsumer>
    );
}

AppBar.propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}

export default AppBar;