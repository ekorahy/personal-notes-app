import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ButtonLink({ link, label, icon, ...rest }) {
  return (
    <>
      <Link to={link} preventScrollReset={true}>
        <button {...rest}>{icon} {label}</button>
      </Link>
    </>
  );
}

ButtonLink.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.object,
}

export default ButtonLink;
