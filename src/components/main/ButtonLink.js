import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function ButtonLink({ link, label, ...rest }) {
    return (
        <>
            <Link to={link}>
                <button {...rest}>{label}</button>
            </Link>
        </>
    );
}

ButtonLink.propTypes = {
    link: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

export default ButtonLink;