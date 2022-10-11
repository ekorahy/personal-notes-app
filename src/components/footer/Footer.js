import React from "react";
import { Link } from "react-router-dom";
import { ThemeConsumer } from "../../contexts/ThemeContext";

function Footer() {
    return (
        <ThemeConsumer>
            {({ theme }) => {
                return (
                    <p className="text-center p-4 mb-0">Copyright © 2022-   
                      <Link to="/"
                        className={`text-${theme === 'dark' ? 'dark' : 'white'} text-decoration-none fw-bold`}>
                          Personal Notes App</Link> by Ekorahy
                    </p>
                )
            }}
        </ThemeConsumer>
    );
}

export default Footer;