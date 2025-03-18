import React from "react";
import AuthRequest from "../../../../services/FetchRequests/AuthRequest";
import AppContext from "../../../../contexts/ContextContainer/AppContext/AppContext";
import CustomerTokenService from "../../../../services/CustomerTokenService/CustomerTokenService";
import "./LogInForm.css";
import {Link} from "react-router-dom";
import {BounceLoader} from "react-spinners";

export default class LogInForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            error: "",
            loading : false
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
        order.cutomer_id = customer.id;

        this.context.ordersContext.updateOrder(order);
    }

    handleLogIn = (e)=>{
        e.preventDefault();

        this.setState({
            loading: true,
            error: ""
        });

        const customer = {
            email: this.state.email,
            password: this.state.password
        };

        for(const key of Object.keys(customer)){
            if(!customer[key]){
                return this.setState({
                    error: `Missing ${key}`,
                    loading: false
                });
            };
        };

        AuthRequest.logInCustomer(customer)
            .then( resData => {
                const customer = resData.customer;

                CustomerTokenService.setToken(resData.token);
                
                this.setCustomerContext(customer);

                this.setOrderContext(customer);

                this.setState({
                    loading: false
                });

                this.props.history.push("/menu/pizza");
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

    displayLoading = ()=>{
        const style = {
            display: "block",
            position: "absolute",
            margin: "0 auto",
            top: "50%",
            left: "50%"
        };

        return <BounceLoader loading={this.state.loading} color="red" cssOverride={style} size={70}/>;
    }

    displayForm = ()=>{
        return (
            <fieldset id="log-in-fieldset">
                    <legend id="log-in-legend">
                        <h2>Log In</h2>
                        <p>New to pizza shop? <Link to="/register">Register</Link></p>
                    </legend>

                    <label htmlFor="log-in-email" className="log-in-label">
                        Email
                    </label>
                    <input id="log-in-email" className="log-in-input" type="email" name="email" value={this.state.email} onChange={this.handleInput}/>

                    <label htmlFor="log-in-password" className="log-in-label">
                        Password
                    </label>
                    <input id="log-in-password" className="log-in-input" type="password" name="password" value={this.state.password} onChange={this.handleInput}/>

                    <p>{this.state.error ? this.state.error : ""}</p>

                    <button id="log-in-submit-btn">Log In</button>
                </fieldset>
        )
    }

    render(){
        return (
            <form id="log-in-form" onSubmit={this.handleLogIn}>
                {!this.state.loading ? this.displayForm() : this.displayLoading()}
            </form>
        );
    };
}