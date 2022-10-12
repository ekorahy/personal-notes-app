import React from "react";
import ToggleTheme from "./ToggleTheme";
import { ThemeConsumer } from "../../contexts/ThemeContext";
import ToggleLanguage from "./ToggleLanguage";

function AppBarUserAuthentication() {
    return (
        <ThemeConsumer>
            {({ theme }) => {
                return (
                    <nav className={`bg-${theme === 'white' ? 'dark' : 'white'} fixed-top`}>
                        <div className={`container d-flex flex-row-reverse`}>
                            <div className="d-flex justify-content-end fs-4 p-2" id="navbarNavAltMarkup">
                                <span className='mx-2'><ToggleLanguage /></span>
                                <span className='mx-2'><ToggleTheme /></span>
                            </div>
                        </div>
                    </nav>
                )
            }}
        </ThemeConsumer>
    )
}

export default AppBarUserAuthentication;