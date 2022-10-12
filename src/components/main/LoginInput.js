import React from "react";
import PropTypes from 'prop-types';
import { ThemeConsumer } from '../../contexts/ThemeContext';

class LoginInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };

        this.onEmailChangehandler = this.onEmailChangehandler.bind(this);
        this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onEmailChangehandler(event) {
        this.setState(() => {
            return {
                email: event.target.value
            }
        })
    }

    onPasswordChangeHandler(event) {
        this.setState(() => {
            return {
                password: event.target.value
            }
        })
    }

    onSubmitHandler(event) {
        event.preventDefault();

        this.props.login({
            email: this.state.email,
            password: this.state.password,
        });
    }

    render() {
        return (
            <ThemeConsumer>
                {({ theme, language }) => {
                    return (
                        <div id="LoginInput">
                            <form className="mb-5" onSubmit={this.onSubmitHandler}>
                                <div>
                                    <div className="mb-3">
                                        <input type="email"
                                        className={`form-control rounded bg-${theme === 'dark' ? 'white' : 'dark'} text-${theme}`} 
                                        placeholder="Email"
                                        id="email" 
                                        value={this.state.email} 
                                        onChange={this.onEmailChangehandler} 
                                        required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password"
                                        className={`form-control rounded bg-${theme === 'dark' ? 'white' : 'dark'} text-${theme}`} 
                                        placeholder={language === 'id' ? 'Kata Sandi' : 'Password'}
                                        id="password" 
                                        value={this.state.password} 
                                        onChange={this.onPasswordChangeHandler} 
                                        required />
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-info p-2 text-white w-100">{language === 'id' ? 'Masuk' : 'Login'}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )
                }}
            </ThemeConsumer>
        );
    }
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
}

export default LoginInput;