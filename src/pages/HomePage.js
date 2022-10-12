import React from "react";
import ButtonLink from "../components/main/ButtonLink";
import UrlImage from "../components/main/UrlImage";
import HomeImg from "../assets/images/illustration_home.png";
import { HiArrowRight } from "react-icons/hi";
import { ThemeConsumer } from '../contexts/ThemeContext';

function HomePage() {
    return (
        <ThemeConsumer>
            {({ theme, language }) => {
                return (
                    <div className="container col-xxl-8 px-4 py-5">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col-10 col-sm-8 col-lg-6">
                                <UrlImage
                                urlImg={HomeImg} 
                                alt="Home Ilustration Image" 
                                className="d-block mx-lg-auto img-fluid" 
                                width="700" 
                                height="500" 
                                loading="lazy" />
                            </div>
                            <div className="col-lg-6">
                                <h2
                                tabIndex={0} 
                                className={`display-5 fw-bold lh-1 mb-3 text-${theme}`}
                                >{language === 'id' ? 'Selamat datang di ' : 'Welcome to '}<span className="text-info">{language === 'id' ? 'Aplikasi Catatan Pribadi' : 'Personal Notes App'}</span></h2>
                                <p tabIndex={0} className={`fw-lighter fs-6 text-${theme}`}>
                                    {language === 'id' ? 'Memudahkan Anda untuk menyimpan dan mengelola catatan pribadi' : 'Makes it easier for you to store and manage your personal notes'}.</p>
                                <ButtonLink
                                link="/menus"
                                label={language === 'id' ? 'Mulai' : 'Get Started'} 
                                icon={<HiArrowRight />} 
                                className="btn btn-info px-4 py-2 text-white fw-400" 
                                style={{padding: "10px 0"}} />
                            </div>
                        </div>
                    </div>
                )
            }}
        </ThemeConsumer>
    );
}

export default HomePage;