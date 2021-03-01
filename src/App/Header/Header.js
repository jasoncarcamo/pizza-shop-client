import React from "react";
import "./Header.css";
import {Link, NavLink} from "react-router-dom";
import Cart from "./Cart/Cart";
import AuthOptions from "./AuthOptions/AuthOptions";
import MenuBurger from "./MenuBurger/MenuBurger";

export default class Header extends React.Component{

    render(){
        return (
            <header id="nav-header">
                <nav id="nav-container">
                    <h2 id="nav-logo">Pizza Shop Logo</h2>

                    <MenuBurger/>

                    <ul id="nav-links-container">
                        <li className="nav-link-list">
                            <NavLink exact to="/" activeClassName="active-link" className="nav-link">Home</NavLink>
                        </li>

                        <li className="nav-link-list">
                            <NavLink to="/menu" activeClassName="active-link" className="nav-link">Menu</NavLink>
                        </li>

                        <li className="nav-link-list">
                            <NavLink to ="/about" activeClassName="active-link" className="nav-link">About Us</NavLink>
                        </li>

                        <AuthOptions history={this.props.history}/>

                        <li className="nav-link-list">
                            <Cart history={this.props.history}/>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    };
}