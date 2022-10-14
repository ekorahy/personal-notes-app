import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/main/RegisterInput";
import UrlImage from "../components/main/UrlImage";
import RegisterImg from "../assets/images/register_img.png";
import { register } from "../utils/api";
import LocaleContext from "../contexts/LocaleContext";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

function RegisterPage() {
  const navigate = useNavigate();
  const { theme, language } = React.useContext(LocaleContext);

  React.useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  async function onRegisterHandler(user) {
    const { error } = await register(user);

    if (!error) {
      Swal.fire(
        "Successful Registration",
        "Your account has been successfully registered!",
        "success"
      )
      navigate("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Registration failed!"
      })
    }
  }

  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row align-items-center g-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <UrlImage
             urlImg={RegisterImg} 
             data-aos="fade-right"
             alt="Home Ilustration Image" 
             className="d-block mx-lg-auto img-fluid" 
             width="450" 
             height="400" 
             loading="lazy" />
          </div>
          <div className="col-lg-6" data-aos="fade-down">
            <div>
              <h1 className="text-info fw-bold">{language === "id" ? "Formulir Pendaftaran" : "Register Form"}</h1>
              <p
               className={`text-${theme === "dark" ? "muted" : "white"}`}>
                {language === "id" ? "Silakan daftarkan identitas Anda" : "Please register your identity"}.</p>
            </div>
            <RegisterInput register={onRegisterHandler} />
            <p
             className={`text-${theme === "dark" ? "muted" : "white"} text-center`}>
              {language === "id" ? "Sudah punya akun" : "Already have an account"}
               ? <Link className="text-info" to="/">login</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage;
