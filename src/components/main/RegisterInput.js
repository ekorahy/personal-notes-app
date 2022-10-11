import React from "react";
import PropTypes from 'prop-types';
import { ThemeConsumer } from '../../contexts/ThemeContext';

class RegisterInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onConfirmPasswordChange = this.onConfirmPasswordChange.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onNameChange(event) {
        this.setState(() => {
            return {
                name: event.target.value,
            }
        })
    }

    onEmailChange(event) {
        this.setState(() => {
            return {
                email: event.target.value,
            }
        })
    }

    onPasswordChange(event) {
        this.setState(() => {
            return {
                password: event.target.value,
            }
        })
    }

    onConfirmPasswordChange(event) {
        this.setState(() => {
            return {
                confirmPassword: event.target.value,
            }
        })
    }

    onSubmitHandler(event) {
        event.preventDefault();

        if (this.state.password !== this.state.confirmPassword) {
            alert('Password must same !!!');
        } else {
            this.props.register({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
            });
        }
    }

    render() {
        return (
            <ThemeConsumer>
                {({theme}) => {
                    return (
                        <div id="RegisterInput">
                            <form className="mb-5" onSubmit={this.onSubmitHandler}>
                                <div>
                                    <div className="mb-3">
                                        <input type="text"
                                        className={`form-control rounded bg-${theme === 'dark' ? 'white' : 'dark'} text-${theme}`} 
                                        placeholder="Name"
                                        id="name" 
                                        value={this.state.name} 
                                        onChange={this.onNameChange} 
                                        required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email"
                                        className={`form-control rounded bg-${theme === 'dark' ? 'white' : 'dark'} text-${theme}`} 
                                        placeholder="Email"
                                        id="email" 
                                        value={this.state.email} 
                                        onChange={this.onEmailChange} 
                                        required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password"
                                        className={`form-control rounded bg-${theme === 'dark' ? 'white' : 'dark'} text-${theme}`} 
                                        placeholder="Password"
                                        id="password" 
                                        value={this.state.password} 
                                        onChange={this.onPasswordChange} 
                                        required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password"
                                        className={`form-control rounded bg-${theme === 'dark' ? 'white' : 'dark'} text-${theme}`} 
                                        placeholder="Confirm Password"
                                        id="confirmPassword" 
                                        value={this.state.confirmPassword} 
                                        onChange={this.onConfirmPasswordChange} 
                                        required />
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-info p-2 text-white w-100">Register</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )
                }}
            </ThemeConsumer>
        )
    }
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
}

export default RegisterInput;