import React from "react";
import {Link} from "react-router-dom";
import CustomerTokenService from "../../../services/CustomerTokenService/CustomerTokenService";
import AppContext from "../../../contexts/ContextContainer/AppContext/AppContext";

export default class AuthOptions extends React.Component{

    static contextType = AppContext;

    removeCustomerContext = ()=>{
        this.context.customerContext.deleteCustomer();
    }

    handleSignOut = ()=>{
        CustomerTokenService.deleteToken();

        this.removeCustomerContext();

        this.props.history.push("/");
    }

    loggedInOptions = ()=>{
        return (
            <>
                <li>
                    <Link to="/customer/account">Account</Link>
                </li>

                <li>
                    <button type="button" onClick={this.handleSignOut}>Sign Out</button>
                </li>
            </>
        );
    };

    loggedOffOptions = ()=>{
        return (
            <>
                <li>
                    <Link to="/login">Log In</Link>
                </li>

                <li>
                    <Link to="/register">Register</Link>
                </li>
            </>
        );
    };

    render(){
        return CustomerTokenService.hasToken() ? this.loggedInOptions() : this.loggedOffOptions();
    }
}