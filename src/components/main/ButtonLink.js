import React from "react";
import { Link } from "react-router-dom";

function ButtonLink({link, label, ...rest}) {
    return (
        <>
            <Link to={link}>
                <button {...rest}>{label}</button>
            </Link>
        </>
    );
}

export default ButtonLink;