import React from "react";
import { Link } from "react-router-dom";
import { ThemeConsumer } from "../../contexts/ThemeContext";

function Footer() {
    return (
        <ThemeConsumer>
            {({ theme, language }) => {
                return (
                    <p className="text-center p-4 mb-0">{language === 'id' ? 'Hak Cipta' : 'Copyright'} © 2022-   
                      <Link to="/"
                        className={`text-${theme === 'dark' ? 'dark' : 'white'} text-decoration-none fw-bold`}>
                          {language === 'id' ? 'Aplikasi Catatan Pribadi' : 'Personal Notes App'}</Link> {language === 'id' ? 'oleh' : 'by'} Ekorahy
                    </p>
                )
            }}
        </ThemeConsumer>
    );
}

export default Footer;