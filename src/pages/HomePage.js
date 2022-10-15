import React from "react";
import ButtonLink from "../components/main/ButtonLink";
import UrlImage from "../components/main/UrlImage";
import HomeImg from "../assets/images/illustration_home.png";
import { HiArrowRight } from "react-icons/hi";
import MenusImg from "../assets/images/illustration_menus.png";
import { AiOutlineFileAdd } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { RiArchiveDrawerLine } from "react-icons/ri";
import LocaleContext from "../contexts/LocaleContext";
import AOS from "aos";
import "aos/dist/aos.css";

function HomePage() {
  const { theme, language } = React.useContext(LocaleContext);

  React.useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
                <UrlImage
                 urlImg={HomeImg} 
                 animationImg="fade-left"
                 altImg="Home Ilustration Image" 
                 classImg="d-block mx-lg-auto img-fluid" 
                 width="700" 
                 height="500" />
            </div>
            <div className="col-lg-6">
              <h2
                data-aos="fade-down"
                tabIndex={0} 
                className={`display-5 fw-bold lh-1 mb-3 text-${theme}`}
                >{language === "id" ? "Selamat datang di " : "Welcome to "}<span className="text-info">{language === "id" ? "Aplikasi Catatan Pribadi" : "Personal Notes App"}</span>
              </h2>
              <p data-aos="fade-down" tabIndex={0} className={`fw-lighter fs-6 text-${theme}`}>
                {language === "id" ? "Memudahkan Anda untuk menyimpan dan mengelola catatan pribadi" : "Makes it easier for you to store and manage your personal notes"}.</p>
              <a
               href="#menusSection"
               data-aos="fade-down"
               className="btn btn-info px-4 py-2 text-white fw-400" 
               style={{padding: "10px 0"}} >{language === "id" ? "Mulai" : "Get Started"} <HiArrowRight /></a>
            </div>
        </div>
    </div>
    <div id="menusSection" className="container col-xxl-8 px-4">
        <div className="row flex-lg-row align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6 mx-auto">
            <UrlImage
             urlImg={MenusImg} 
             animationImg="fade-right"
             altImg="Menus Ilustration Image" 
             classImg="d-block mx-lg-auto img-fluid" 
             width="350" 
             height="350" />
          </div>
          <div className="col-lg-6">
            <p tabIndex={0} data-aos="fade-down" className={`fw-lighter fs-6 text-center mt-3 fw-bold text-${theme}`}>{language === "id" ?  "Pilih Menu" : "Choose Menu"}</p>
            <div className="text-center">
              <div className="my-3">
                <ButtonLink
                 link="/add" 
                 animationLink="fade-down"
                 label={language === "id" ? "Tambah catatan baru" : "Add new note"}
                 icon={<AiOutlineFileAdd style={{fontSize: "20px"}} />} 
                 classLink="btn btn-success px-2 py-2 w-75 fw-400" />
              </div>
              <div className="my-3">
                <ButtonLink
                 link="/notes" 
                 animationLink="fade-down"
                 label={language === "id" ? "Lihat catatan" : "View notes"}
                 icon={<CgNotes style={{fontSize: "20px"}} />} 
                 classLink="btn btn-outline-info px-2 py-2 w-75 fw-400" />
              </div>
              <div className="my-3">
                <ButtonLink
                 link="/archived" 
                 animationLink="fade-down"
                 label={language === "id" ? "Lihat arsip" : "View archived"}
                 icon={<RiArchiveDrawerLine style={{fontSize: "20px"}} />} 
                 classLink="btn btn-outline-warning px-2 py-2 w-75 fw-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
