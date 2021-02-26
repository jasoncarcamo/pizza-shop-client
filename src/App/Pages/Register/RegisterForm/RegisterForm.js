import React from "react";
import CustomerTokenService from "../../../../services/CustomerTokenService/CustomerTokenService";
import AuthRequest from "../../../../services/FetchRequests/AuthRequest";
import AppContext from "../../../../contexts/ContextContainer/AppContext/AppContext";

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

    static contextType = AppContext;

    handleInput = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleRegister = (e)=>{
        e.preventDefault();

        const newCustomer = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            mobile_number: this.state.mobile_number,
            email: this.state.email,
            password: this.state.password
        };

        for(const key of Object.keys(newCustomer)){
            if(!newCustomer[key]){
                return this.setState({
                    error: `Missing ${key}`
                });
            };
        };

        AuthRequest.registerCustomer(newCustomer)
            .then( resData => {
                CustomerTokenService.setToken(resData.token);

                this.setCustomerContext(resData.createdCustomer);

                this.props.history.push("/menu");
            })
            .catch( err => {
                return this.setState({
                    error: err.error
                });
            });
    }

    setCustomerContext = (customer)=>{
        this.context.customerContext.setCustomer(customer);
    } 

    render(){
        return (
            <form id="register-form" onSubmit={this.handleRegister}>
                <fieldset id="register-fieldset">
                    <legend></legend>

                    <label htmlFor="register-first-name" className="register-label">
                        First name:
                    </label>
                    <input id="register-first-name" type="text" name="first_name" value={this.state.first_name} onChange={this.handleInput}/>

                    <label htmlFor="register-last-name" className="register-label">
                        Last name:
                    </label>
                    <input id="register-last-name" type="text" name="last_name" value={this.state.last_name} onChange={this.handleInput}/>

                    <label htmlFor="register-mobile-number" className="register-label">
                        Mobile number:
                    </label>
                    <input id="register-mobile-number" type="text" name="mobile_number" value={this.state.mobile_number} onChange={this.handleInput}/>

                    <label htmlFor="register-email" className="register-label">
                        Email:
                    </label>
                    <input id="register-email" type="email" name="email" value={this.state.email} onChange={this.handleInput}/>

                    <label htmlFor="register-password" className="register-label">
                        Password:
                    </label>
                    <input id="register-password" type="password" name="password" value={this.state.password} onChange={this.handleInput}/>

                    <label htmlFor="register-confirm-password" className="register-label">
                        Confirm password:
                    </label>
                    <input id="register-confirm-password" type="password" name="confirm_password" value={this.state.confirm_password} onChange={this.handleInput}/>

                    <p>{this.state.error ? this.state.error : ""}</p>

                    <button type="submit">Register</button>
                </fieldset>
            </form>
        );
    };
}