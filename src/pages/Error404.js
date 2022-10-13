import React from "react";
import UrlImage from "../components/main/UrlImage";
import Error404 from "../assets/images/error404.png";
import ButtonLink from "../components/main/ButtonLink";
import LocaleContext from "../contexts/LocaleContext";

function PageNotFound() {
    const { language } = React.useContext(LocaleContext);
    return (
        <div className="container text-center text-danger" style={{marginTop: '50px'}}>
            <h1 className="fw-bold">{language === 'id' ? 'Kesalahan 404' : 'ERROR 404'}</h1>
            <p>- {language === 'id' ? 'Halaman Tidak Ditemukan' : 'Page Not Found'} -</p>
            <UrlImage
             urlImg={Error404} 
             alt="Home Ilustration Image" 
             className="d-block mx-lg-auto img-fluid mx-auto" 
             width="500px" 
             loading="lazy" />
            <div className="d-flex justify-content-center mt-3 mb-5">
                <ButtonLink
                 link="/" 
                 label={language === 'id' ? 'Kembali ke beranda' : 'Back to Home'} 
                 className='btn btn-link text-info'
                 title="Add New Note" />
            </div>
        </div>
    );
}

export default PageNotFound;