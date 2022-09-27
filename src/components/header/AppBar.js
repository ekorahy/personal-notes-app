import React from "react";
import Logo from "../../assets/images/logo.png";
import UrlImage from "../main/UrlImage";
import { Link } from "react-router-dom";

function AppBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{backgroundColor: "#fff"}}>
                <div className="container d-flex">
                    <Link className="navbar-brand mx-3 flex-grow-1" to="/">
                        <UrlImage
                         src={Logo} 
                         alt={"Logo Personal Notes App"} 
                         width="50" 
                         height="50" 
                         className="d-inline-block align-center" />
                    </Link>
                    <button
                     className="navbar-toggler" 
                     type="button" 
                     data-bs-toggle="collapse" 
                     data-bs-target="#navbarNavAltMarkup" 
                     aria-controls="navbarNavAltMarkup" 
                     aria-expanded="false" 
                     aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <Link className="nav-link me-4 fw-bold" to="/">Home</Link>
                        <Link className="nav-link me-4 fw-bold" to="/menus">Menus</Link>
                        <Link className="nav-link me-4 fw-bold" to="/notes">Notes</Link>
                        <Link className="nav-link me-4 fw-bold" to="/archived">Archived</Link>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default AppBar;