import React from "react";
import {NavLink} from "react-router-dom";
import CustomerTokenService from "../../../services/CustomerTokenService/CustomerTokenService";
import AppContext from "../../../contexts/ContextContainer/AppContext/AppContext";
import "./AuthOptions.css";

export default class AuthOptions extends React.Component{

    static contextType = AppContext;

    setOrderDefault = ()=>{
        this.context.ordersContext.setDefaultOrder();
    }

    setCartDefault = ()=>{
        this.context.cartContext.setDefault();
    }

    removeCustomerContext = ()=>{
        this.context.customerContext.deleteCustomer();
    }

    handleSignOut = ()=>{
        CustomerTokenService.deleteToken();

        this.removeCustomerContext();

        this.setOrderDefault();
        this.setCartDefault();

        this.toggleMobileMenu();

        this.props.history.push("/order");
    }

    toggleMobileMenu = ()=>{
        this.props.toggleMobileMenu();
    }

    loggedInOptions = ()=>{
        return (
            <>
                <li className="nav-link-list">
                    <NavLink exact to="/customer/account" onClick={this.toggleMobileMenu} activeClassName="active-link" className="nav-link">Account</NavLink>
                </li>

                <li className="signout-link">
                    <button className="signout-btn" type="button" onClick={this.handleSignOut}>Sign Out</button>
                </li>
            </>
        );
    };

    loggedOffOptions = ()=>{
        return (
            <>
                <li className="nav-link-list">
                    <NavLink exact to="/login" onClick={this.toggleMobileMenu} activeClassName="active-link" className="nav-link">Log In</NavLink>
                </li>

                <li className="nav-link-list"> 
                    <NavLink exact to="/register" onClick={this.toggleMobileMenu} activeClassName="active-link" className="nav-link">Register</NavLink>
                </li>
            </>
        );
    };

    render(){
        return CustomerTokenService.hasToken() ? this.loggedInOptions() : this.loggedOffOptions();
    }
}