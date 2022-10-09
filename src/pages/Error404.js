import React from "react";
import UrlImage from "../components/main/UrlImage";
import Error404 from "../assets/images/error404.png";
import ButtonLink from "../components/main/ButtonLink";

function PageNotFound() {
    return (
        <div className="container">
            <UrlImage
             urlImg={Error404} 
             alt="Home Ilustration Image" 
             className="d-block mx-lg-auto img-fluid mx-auto" 
             width="500px" 
             loading="lazy" />
            <div className="d-flex justify-content-center mt-3 mb-5">
                <ButtonLink
                 link="/" 
                 label="Back to Home" 
                 className='btn btn-link fw-bold'
                 title="Add New Note" />
            </div>
        </div>
    );
}

export default PageNotFound;