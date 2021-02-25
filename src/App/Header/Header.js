import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import Cart from "./Cart/Cart";

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
                    </ul>

                    <Cart/>
                </nav>
            </header>
        );
    };
}