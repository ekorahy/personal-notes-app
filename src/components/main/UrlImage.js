import React from "react";

function UrlImage({urlImg, alt, ...rest}) {
    return (
        <img tabIndex={0} src={urlImg} alt={alt} {...rest} />
    );
}

export default UrlImage;