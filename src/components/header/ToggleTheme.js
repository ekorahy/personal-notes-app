import React from "react";
import { ThemeConsumer } from "../../contexts/ThemeContext";
import { FaMoon, FaSun } from 'react-icons/fa';

function ToggleTheme() {
    return (
        <ThemeConsumer>
            {({ theme, toggleTheme }) => {
                return <button onClick={toggleTheme} className={`btn btn-link nav-link me-1 text-${theme} fw-bold`}>{theme === 'dark' ? <FaMoon className="text-dark" /> : <FaSun className="text-warning" />}</button>;
            }}
        </ThemeConsumer>
    )
}

export default ToggleTheme;

