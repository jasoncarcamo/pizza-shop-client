import React from "react";
import CustomerTokenService from "../../../../services/CustomerTokenService/CustomerTokenService";
import AuthRequest from "../../../../services/FetchRequests/AuthRequest";
import AppContext from "../../../../contexts/ContextContainer/AppContext/AppContext";
import "./RegisterForm.css";
import {Link} from "react-router-dom";
import {BounceLoader} from "react-spinners";

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
            error: "",
            loading: false
        }
    }

    static contextType = AppContext;

    handleInput = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    setOrderContext = (customer)=>{
        const order = this.context.ordersContext.order;
        
        order.customer_first_name = customer.first_name;
        order.customer_last_name = customer.last_name;
        order.customer_mobile_number = customer.mobile_number;
        order.customer_address = customer.address;
        order.customer_city = customer.city;
        order.customer_state = customer.state;
        order.customer_zip_code = customer.zip_code;
        order.customer_id = customer.id;

        this.context.ordersContext.updateOrder(order);
    }

    handleRegister = (e)=>{
        e.preventDefault();

        this.setState({
            error: "",
            loading: true
        });

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
                    error: `Missing ${key.split("_").join(" ")}`,
                    loading: false
                });
            };
        };

        AuthRequest.registerCustomer(newCustomer)
            .then( resData => {
                const customer = resData.createdCustomer;

                CustomerTokenService.setToken(resData.token);

                this.setCustomerContext(customer);

                this.setOrderContext(customer)
                this.setState({
                    loading: false
                });
                this.props.history.push("/menu");
            })
            .catch( err => {
                return this.setState({
                    error: err.error,
                    loading: false
                });
            });
    }

    setCustomerContext = (customer)=>{
        this.context.customerContext.setCustomer(customer);
    } 

    loadingHandler = ()=>{
        if(this.state.loading){
            return <BounceLoader loading={this.state.loading} color="red" size={60}/>
        } else{
            return <button id="register-submit-btn" type="submit">Register</button>
        }
    }

    render(){
        return (
            <form id="register-form" onSubmit={this.handleRegister}>
                <fieldset id="register-fieldset">
                    <legend id="register-legend">
                        <h2>Register</h2>
                        <p>Already have an account? <Link to="/login">Log in</Link></p>
                    </legend>

                    <label htmlFor="" className="register-label">
                        First name:
                    </label>
                    <input id="register-first-name" className="register-input" type="text" name="first_name" value={this.state.first_name} onChange={this.handleInput}/>

                    <label htmlFor="register-last-name" className="register-label">
                        Last name:
                    </label>
                    <input id="register-last-name" className="register-input" type="text" name="last_name" value={this.state.last_name} onChange={this.handleInput}/>

                    <label htmlFor="register-mobile-number" className="register-label">
                        Mobile number:
                    </label>
                    <input id="register-mobile-number" className="register-input" type="text" name="mobile_number" value={this.state.mobile_number} onChange={this.handleInput}/>

                    <label htmlFor="register-email" className="register-label">
                        Email:
                    </label>
                    <input id="register-email" className="register-input" type="email" name="email" value={this.state.email} onChange={this.handleInput}/>

                    <label htmlFor="register-password" className="register-label">
                        Password:
                    </label>
                    <input id="register-password" className="register-input" type="password" name="password" value={this.state.password} onChange={this.handleInput}/>

                    <label htmlFor="register-confirm-password" className="register-label">
                        Confirm password:
                    </label>
                    <input id="register-confirm-password" className="register-input" type="password" name="confirm_password" value={this.state.confirm_password} onChange={this.handleInput}/>

                    <p>{this.state.error ? this.state.error : ""}</p>

                    {this.loadingHandler()}
                </fieldset>
            </form>
        );
    };
} 