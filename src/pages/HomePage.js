import React from "react";
import ButtonLink from "../components/main/ButtonLink";
import UrlImage from "../components/main/UrlImage";
import HomeImg from "../assets/images/illustration_home.png";

function HomePage() {
    return (
        <div>
            <div className='container col-xxl-8 px-4 py-5'>
                <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
                <div className='col-10 col-sm-8 col-lg-6'>
                <UrlImage src={HomeImg} alt="Home Ilustration Image" className='d-block mx-lg-auto img-fluid' width='700' height='500' loading='lazy' />
                </div>
                <div className='col-lg-6'>
                    <h2 tabIndex={0} className='display-5 fw-bold lh-1 mb-3'>Welcome to <span className='text-info'>Personal Notes App</span></h2>
                    <p tabIndex={0} className='fw-lighter fs-6'>Makes it easier for you to store and manage your personal notes.</p>
                    <ButtonLink link="/menus" label="Get Started" className='btn btn-info px-4 text-white fw-400' style={{padding: '10px 0'}} />
                </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;