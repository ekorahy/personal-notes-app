import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ButtonLink({ link, animationLink, label, icon, classLink, title }) {
  return (
    <>
      <Link to={link} preventScrollReset={true}>
        <button data-aos={animationLink} className={classLink} title={title}>{icon} {label}</button>
      </Link>
    </>
  );
}

ButtonLink.propTypes = {
  link: PropTypes.string.isRequired,
  animationLink: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.object,
  classLink: PropTypes.string.isRequired,
  title: PropTypes.string,
}

export default ButtonLink;
