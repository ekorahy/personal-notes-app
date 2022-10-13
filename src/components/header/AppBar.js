import React from "react";
import Logo from "../../assets/images/logo.png";
import UrlImage from "../main/UrlImage";
import { Link } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi';
import PropTypes from 'prop-types';
import ToggleTheme from "./ToggleTheme";
import LocaleContext from "../../contexts/LocaleContext";
import ToggleLanguage from "./ToggleLanguage";

function AppBar({ logout, name }) {
    const { theme, language } = React.useContext(LocaleContext);
    return (
        <nav 
            className={`navbar navbar-expand-lg navbar-${theme === 'dark' ? 'light' : 'dark'} bg-${theme === 'white' ? 'dark' : 'white'} fixed-top`}>
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
                className={`navbar-toggler`}
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNavAltMarkup" 
                aria-controls="navbarNavAltMarkup" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className='navbar-toggler-icon'></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav text-center">
                        <Link className={`nav-link mx-2 fw-bold text-${theme}`} to="/">{language === 'id' ? 'Beranda' : 'Home'}</Link>
                        <Link className={`nav-link mx-2 fw-bold text-${theme}`} to="/notes">{language === 'id' ? 'Catatan' : 'Notes'}</Link>
                        <Link className={`nav-link mx-2 fw-bold text-${theme}`} to="/archived">{language === 'id' ? 'Terarsip' : 'Archived'}</Link>
                    </div>
                </div>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <ToggleLanguage />
                        <ToggleTheme />
                        <button
                            className="btn btn-link nav-link text-danger fw-bold" 
                            onClick={logout}
                            title={language === 'id' ? 'Keluar' : 'Log Out'}>
                            {name} <FiLogOut /></button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

AppBar.propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}

export default AppBar;