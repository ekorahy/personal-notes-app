import React from "react";
import PropTypes from "prop-types";

function UrlImage({ urlImg, alt, ...rest }) {
  return (
    <img tabIndex={0} src={urlImg} alt={alt} {...rest} />
  );
}

UrlImage.propTypes = {
  urlImg: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default UrlImage;
