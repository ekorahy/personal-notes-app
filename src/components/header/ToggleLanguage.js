import React from "react";
import LocaleContext from "../../contexts/LocaleContext";
import { MdGTranslate } from 'react-icons/md';

function ToggleLanguage() {
    const { language, toggleLanguage } = React.useContext(LocaleContext);
    return (
        <>
            <button
                onClick={toggleLanguage} 
                className='btn btn-link nav-link mx-2 text-primary fw-bold'>
                <MdGTranslate className='text-primary '/> {language}
            </button>
        </>
    )
}

export default ToggleLanguage;