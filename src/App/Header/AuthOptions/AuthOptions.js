import React from "react";
import {NavLink} from "react-router-dom";
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
                <li className="nav-link-list">
                    <NavLink exact to="/customer/account" activeClassName="active-link">Account</NavLink>
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
                    <NavLink exact to="/login" activeClassName="active-link">Log In</NavLink>
                </li>

                <li>
                    <NavLink exact to="/register" activeClassName="active-link">Register</NavLink>
                </li>
            </>
        );
    };

    render(){
        return CustomerTokenService.hasToken() ? this.loggedInOptions() : this.loggedOffOptions();
    }
}