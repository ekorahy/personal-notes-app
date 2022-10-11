import React from "react";
import ToggleTheme from "./ToggleTheme";
import { ThemeConsumer } from "../../contexts/ThemeContext";

function AppBarUserAuthentication() {
    return (
        <ThemeConsumer>
            {({ theme }) => {
                return (
                    <nav className={`bg-${theme === 'white' ? 'dark' : 'white'} fixed-top`}>
                        <div className={`container d-flex flex-row-reverse`}>
                            <div className="d-flex justify-content-end" id="navbarNavAltMarkup">
                                <div className="navbar-nav fs-3">
                                    <ToggleTheme />
                                </div>
                            </div>
                        </div>
                    </nav>
                )
            }}
        </ThemeConsumer>
    )
}

export default AppBarUserAuthentication;