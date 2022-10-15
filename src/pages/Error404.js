import React from "react";
import UrlImage from "../components/main/UrlImage";
import Error404 from "../assets/images/error404.png";
import ButtonLink from "../components/main/ButtonLink";
import LocaleContext from "../contexts/LocaleContext";
import AOS from "aos";
import "aos/dist/aos.css";

function PageNotFound() {
  const { language } = React.useContext(LocaleContext);

  React.useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <div className="container text-center text-danger" style={{marginTop: "50px"}}>
      <h1
       className="fw-bold" 
       data-aos="fade-down">{language === "id" ? "Kesalahan 404" : "ERROR 404"}</h1>
      <p 
       data-aos="fade-down">- {language === "id" ? "Halaman Tidak Ditemukan" : "Page Not Found"} -</p>
      <UrlImage
       urlImg={Error404} 
       animationImg="fade-down" 
       altImg="Error 404 Ilustration Image" 
       classImg="d-block mx-lg-auto img-fluid mx-auto" 
       width="500px"
       height="500px" />
      <div className="d-flex justify-content-center mt-3 mb-5">
        <ButtonLink
         link="/" 
         animationLink="fade-down"
         label={language === "id" ? "Kembali ke beranda" : "Back to Home"} 
         classLink="btn btn-link text-info" />
      </div>
    </div>
  );
}

export default PageNotFound;
