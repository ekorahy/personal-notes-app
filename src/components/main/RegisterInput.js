import React from "react";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/LocaleContext";
import useInput from "../../hooks/useInput";
import Swal from "sweetalert2";

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");
  const { theme, language } = React.useContext(LocaleContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    password !== confirmPassword ? 
      Swal.fire({
        icon: "error",
        title: "Passwords must be the same",
      })
    : register({
      name: name,
      email: email,
      password: password,
    });
  }

  return (
    <div id="RegisterInput">
      <form className="mb-5" onSubmit={onSubmitHandler}>
        <div>
          <div className="mb-3">
            <input type="text"
             className={`form-control rounded bg-${theme === "dark" ? "white" : "dark"} text-${theme}`} 
             placeholder={language === "id" ? "Nama" : "Name"}
             id="name" 
             value={name} 
             onChange={onNameChange} 
             required />
          </div>
          <div className="mb-3">
            <input type="email"
             className={`form-control rounded bg-${theme === "dark" ? "white" : "dark"} text-${theme}`} 
             placeholder="Email"
             id="email" 
             value={email} 
             onChange={onEmailChange} 
             required />
          </div>
          <div className="mb-3">
            <input type="password"
             className={`form-control rounded bg-${theme === "dark" ? "white" : "dark"} text-${theme}`} 
             placeholder={language === "id" ? "Kata Sandi" : "Password"}
             id="password" 
             value={password} 
             onChange={onPasswordChange} 
             required />
          </div>
          <div className="mb-3">
            <input type="password"
             className={`form-control rounded bg-${theme === "dark" ? "white" : "dark"} text-${theme}`} 
             placeholder={language === "id" ? "Konfigurasi Kata Sandi" : "Confirm Password"}
             id="confirmPassword" 
             value={confirmPassword} 
             onChange={onConfirmPasswordChange} 
             required />
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-info p-2 text-white w-100">{language === "id" ? "Daftar" : "Register"}</button>
          </div>
        </div>
      </form>
    </div>
  )
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
}

export default RegisterInput;
