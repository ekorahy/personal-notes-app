import React from "react";
import PropTypes from "prop-types";
import LocaleContext from "../../contexts/LocaleContext";
import useInput from "../../hooks/useInput";

function LoginInput({ login }) {
  const [email, onEmailChangehandler] = useInput("");
  const [password, onPasswordChangeHandler] = useInput("");
  const { theme, language } = React.useContext(LocaleContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    login({
      email: email,
      password: password,
    });
  }

  return (
    <div id="LoginInput">
      <form className="mb-5" onSubmit={onSubmitHandler}>
        <div>
          <div className="mb-3">
            <input type="email"
             className={`form-control rounded bg-${theme === "dark" ? "white" : "dark"} text-${theme}`} 
             placeholder="Email"
             id="email" 
             value={email} 
             onChange={onEmailChangehandler} 
             required />
          </div>
          <div className="mb-3">
            <input type="password"
             className={`form-control rounded bg-${theme === "dark" ? "white" : "dark"} text-${theme}`} 
             placeholder={language === "id" ? "Kata Sandi" : "Password"}
             id="password" 
             value={password} 
             onChange={onPasswordChangeHandler} 
             required />
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-info p-2 text-white w-100">{language === "id" ? "Masuk" : "Login"}</button>
          </div>
        </div>
      </form>
    </div>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}

export default LoginInput;
