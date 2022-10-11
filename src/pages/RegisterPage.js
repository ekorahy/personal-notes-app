import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from "../components/main/RegisterInput";
import UrlImage from "../components/main/UrlImage";
import RegisterImg from '../assets/images/register_img.png';
import { register } from '../utils/network-data';
import { ThemeConsumer } from '../contexts/ThemeContext';

function RegisterPage() {
    const navigate = useNavigate();

    async function onRegisterHandler(user) {
        const { error } = await register(user);
        if (!error) {
            navigate('/');
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
                            urlImg={RegisterImg} 
                            alt="Home Ilustration Image" 
                            className="d-block mx-lg-auto img-fluid" 
                            width="450" 
                            height="400" 
                            loading="lazy" />
                            </div>
                            <div className="col-lg-6">
                                <div className="">
                                    <h1 className="text-info fw-bold">Register Form</h1>
                                    <p className={`text-${theme === 'dark' ? 'muted' : 'white'}`}>Please register your identity.</p>
                                </div>
                                <RegisterInput register={onRegisterHandler} />
                                <p className={`text-${theme === 'dark' ? 'muted' : 'white'} text-center`}>Already have an account ? <Link to='/'>login</Link></p>
                            </div>
                            </div>
                        </div>
                    </div>
                )
            }}
        </ThemeConsumer>
    )
}

export default RegisterPage;