import React from "react";
import PropTypes from "prop-types";

function UrlImage({ urlImg, animationImg, altImg, classImg, width, height }) {
  return (
    <img tabIndex={0} data-aos={animationImg} src={urlImg} alt={altImg} className={classImg} width={width} height={height} />
  );
}

UrlImage.propTypes = {
  urlImg: PropTypes.string.isRequired,
  animationImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired,
  classImg: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string,
}

export default UrlImage;
