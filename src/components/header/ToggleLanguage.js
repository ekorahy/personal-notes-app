import React from "react";
import { ThemeConsumer } from "../../contexts/ThemeContext";
import { MdGTranslate } from 'react-icons/md';

function ToggleLanguage() {
    return (
        <ThemeConsumer>
            {({ theme, language, toggleLanguage }) => {
                return (
                    <>
                        <button
                         onClick={toggleLanguage} 
                         className={`btn btn-link nav-link me-1 text-${theme} fw-bold`}>
                            <MdGTranslate className={`text-${theme}`} /> {language}
                        </button>;
                    </>
                )
            }}
        </ThemeConsumer>
    )
}

export default ToggleLanguage;