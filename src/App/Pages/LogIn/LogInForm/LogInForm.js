import React from "react";
import AuthRequest from "../../../../services/FetchRequests/AuthRequest";
import AppContext from "../../../../contexts/ContextContainer/AppContext/AppContext";
import CustomerTokenService from "../../../../services/CustomerTokenService/CustomerTokenService";

export default class LogInForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        }
    }

    static contextType = AppContext;

    handleInput = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleLogIn = (e)=>{
        e.preventDefault();

        const customer = {
            email: this.state.email,
            password: this.state.password
        };

        for(const key of Object.keys(customer)){
            if(!customer[key]){
                return this.setState({
                    error: `Missing ${key}`
                });
            };
        };

        AuthRequest.logInCustomer(customer)
            .then( resData => {

                CustomerTokenService.setToken(resData.token);
                
                this.setCustomerContext(resData.customer);

                this.props.history.push("/customer");
            })
            .catch( err => {
                console.log(err);
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
            <form id="log-in-form" onSubmit={this.handleLogIn}>
                <fieldset id="log-in-fieldset">
                    <legend></legend>

                    <label htmlFor="log-in-email" className="log-in-label">
                        Email:
                    </label>
                    <input id="log-in-email" className="log-in-input" type="email" name="email" value={this.state.email} onChange={this.handleInput}/>

                    <label htmlFor="log-in-password" className="log-in-label">
                        Password:
                    </label>
                    <input id="log-in-password" className="log-in-input" type="password" name="password" value={this.state.password} onChange={this.handleInput}/>

                    <p>{this.state.error ? this.state.error : ""}</p>

                    <button id="log-in-submit-btn">Log In</button>
                </fieldset>
            </form>
        );
    };
}