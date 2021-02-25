import React from "react";

export default class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            mobile_number: "",
            email: "",
            password: "",
            confirm_password: "",
            error: ""
        }
    }

    handleInput = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        return (
            <form id="register-form">
                <fieldset id="register-fieldset">
                    <legend></legend>

                    <label htmlFor="register-first-name" className="register-label">
                        <input id="register-first-name" type="text" name="first_name" value={this.state.first_name} onChange={this.handleInput}/>
                    </label>

                    <label htmlFor="register-last-name" className="register-label">
                        <input id="register-last-name" type="text" name="last_name" value={this.state.last_name} onChange={this.handleInput}/>
                    </label>

                    <label htmlFor="register-mobile-number" className="register-label">
                        <input id="register-mobile-number" type="text" name="mobile_number" value={this.state.mobile_number} onChange={this.handleInput}/>
                    </label>

                    <label htmlFor="register-email" className="register-label">
                        <input id="register-email" type="email" name="email" value={this.state.email} onChange={this.handleInput}/>
                    </label>

                    <label htmlFor="register-password" className="register-label">
                        <input id="register-password" type="password" name="password" value={this.state.password} onChange={this.handleInput}/>
                    </label>

                    <label htmlFor="register-confirm-password" className="register-label">
                        <input id="register-confirm-password" type="password" name="confirm_password" value={this.state.confirm_password} onChange={this.handleInput}/>
                    </label>

                    <button type="submit">Register</button>
                </fieldset>
            </form>
        );
    };
}