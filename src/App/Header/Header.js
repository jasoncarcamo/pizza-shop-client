import React from "react";
import "./Header.css";
import {NavLink} from "react-router-dom";
import Cart from "./Cart/Cart";
import AuthOptions from "./AuthOptions/AuthOptions";
import MenuBurger from "./MenuBurger/MenuBurger";

export default class Header extends React.Component{

    componentDidUpdate(prevProps){
        if(prevProps.location.pathname !== this.props.location.pathname){
            window.scrollTo(0, 0);
        };
    }

    toggleMobileMenu = ()=>{
        const menuBurger = document.getElementById("nav-burger");
        const linkContainer = document.getElementById("nav-links-container");

        menuBurger.classList.toggle("is-active");
        linkContainer.classList.toggle("show-links-container");
    }

    goHome = ()=>{
        this.props.history.push("/");
    }

    render(){
        return (
            <header id="nav-header">
                <nav id="nav-container">
                    <h2 id="nav-logo" onClick={this.goHome}>Pizza Shop</h2>

                    <MenuBurger toggleMobileMenu={this.toggleMobileMenu}/>

                    <ul id="nav-links-container">
                        <li className="nav-link-list">
                            <NavLink exact to="/" onClick={this.toggleMobileMenu} activeClassName="active-link" className="nav-link">Home</NavLink>
                        </li>

                        <li className="nav-link-list">
                            <NavLink to="/menu/pizza" onClick={this.toggleMobileMenu} activeClassName="active-link" className="nav-link">Menu</NavLink>
                        </li>

                        <li className="nav-link-list">
                            <NavLink to ="/order" onClick={this.toggleMobileMenu} activeClassName="active-link" className="nav-link">Order</NavLink>
                        </li>

                        <li className="nav-link-list">
                            <NavLink to ="/about" onClick={this.toggleMobileMenu} activeClassName="active-link" className="nav-link">About</NavLink>
                        </li>

                        <AuthOptions toggleMobileMenu={this.toggleMobileMenu} history={this.props.history}/>

                        <li className="nav-link-list">
                            <a className="call-btn" href="tel:9999999999">Call us</a>
                        </li>

                        <li className="nav-link-list">
                            <Cart history={this.props.history} toggleMobileMenu={this.toggleMobileMenu}/>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    };
}