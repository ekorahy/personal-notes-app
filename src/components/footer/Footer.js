import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="text-center p-4">© 2022 Copyright 
                <Link to="/"
                 className="text-reset text-decoration-none fw-bold">
                  Personal Notes App</Link> by Ekorahy
            </div>
        </>
    );
}

export default Footer;