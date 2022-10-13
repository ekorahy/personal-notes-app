import React from "react";
import LocaleContext from "../../contexts/LocaleContext";
import { MdGTranslate } from 'react-icons/md';

function ToggleLanguage() {
    const { language, toggleLanguage } = React.useContext(LocaleContext);
    return (
        <>
            <button
                onClick={toggleLanguage} 
                className='btn btn-link nav-link mx-2 text-info fw-bold'>
                <MdGTranslate className='text-info'/> {language}
            </button>
        </>
    )
}

export default ToggleLanguage;