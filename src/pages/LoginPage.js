import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from "../components/main/LoginInput";
import UrlImage from "../components/main/UrlImage";
import LoginImg from '../assets/images/login_img.png';
import { login } from '../utils/network-data';
import { ThemeConsumer } from '../contexts/ThemeContext';

function LoginPage({ loginSuccess }) {
    async function onLogin({ email, password }) {
        const { error, data } = await login({ email, password });

        if (!error) {
            loginSuccess(data);
        }
    }

    return (
        <ThemeConsumer>
            {({ theme }) => {
                return (
                    <div>
                        <div className="container col-xxl-8 px-4 py-5">
                            <div className="row flex-lg-row-reverse align-items-center g-5">
                                <div className="col-10 col-sm-8 col-lg-6">
                                    <UrlImage
                                    urlImg={LoginImg} 
                                    alt="Home Ilustration Image" 
                                    className="d-block mx-lg-auto img-fluid" 
                                    width="450" 
                                    height="400" 
                                    loading="lazy" />
                                </div>
                                <div className="col-lg-6">
                                    <div>
                                        <h1 className="text-info fw-bold">Login Form</h1>
                                        <p className={`text-${theme === 'dark' ? 'muted' : 'white'}`}>Please login to continue into the application.</p>
                                    </div>
                                    <LoginInput login={onLogin} />
                                    <p className={`text-${theme === 'dark' ? 'muted' : 'white'} text-center`}>Don't have an account yet ? <Link to='/register'>Register</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }}
        </ThemeConsumer>
    )
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func.isRequired,
}

export default LoginPage;