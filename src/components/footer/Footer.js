import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <p className="text-center p-4">Copyright © 2022-   
                <Link to="/"
                 className="text-reset text-decoration-none fw-bold">
                  Personal Notes App</Link> by Ekorahy
            </p>
        </>
    );
}

export default Footer;