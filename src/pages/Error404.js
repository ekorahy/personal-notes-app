import React from "react";
import UrlImage from "../components/main/UrlImage";
import Error404 from "../assets/images/error404.png";
import ButtonLink from "../components/main/ButtonLink";
import LocaleContext from "../contexts/LocaleContext";
import AOS from 'aos';
import 'aos/dist/aos.css';

function PageNotFound() {
    const { language } = React.useContext(LocaleContext);

    React.useEffect(() => {
        AOS.init({
          duration : 2000
        });
    }, []);

    return (
        <div className="container text-center text-danger" style={{marginTop: '50px'}}>
            <h1
             className="fw-bold" 
             data-aos="fade-down">{language === 'id' ? 'Kesalahan 404' : 'ERROR 404'}</h1>
            <p 
            data-aos="fade-down">- {language === 'id' ? 'Halaman Tidak Ditemukan' : 'Page Not Found'} -</p>
            <UrlImage
             urlImg={Error404} 
             data-aos="fade-down" 
             alt="Home Ilustration Image" 
             className="d-block mx-lg-auto img-fluid mx-auto" 
             width="500px" 
             loading="lazy" />
            <div className="d-flex justify-content-center mt-3 mb-5">
                <ButtonLink
                 link="/" 
                 data-aos="fade-down" 
                 data-aos-easing="linear" 
                 data-aos-duration="1500"
                 label={language === 'id' ? 'Kembali ke beranda' : 'Back to Home'} 
                 className='btn btn-link text-info'
                 title="Add New Note" />
            </div>
        </div>
    );
}

export default PageNotFound;