import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import Cart from "./Cart/Cart";
import CustomerTokenService from "../../services/CustomerTokenService/CustomerTokenService";
import AuthOptions from "./AuthOptions/AuthOptions";

export default class Header extends React.Component{

    render(){
        return (
            <header>
                <nav>
                    <h2>Pizza Shop</h2>

                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/Menu">Menu</Link>
                        </li>

                        <li>
                            <Link to ="/about">About Us</Link>
                        </li>

                        <AuthOptions history={this.props.history}/>
                    </ul>

                    <Cart/>
                </nav>
            </header>
        );
    };
}