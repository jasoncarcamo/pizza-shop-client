import React from "react";
import "./hamburger.css";
import "./MenuBurger.css";

export default class MenuBurger extends React.Component{

    toggleMobileMenu = ()=>{
        this.props.toggleMobileMenu();
    }

    render(){
        return (
            <button id="nav-burger" className="hamburger hamburger--collapse" type="button" onClick={this.toggleMobileMenu}>
                <span className="hamburger-box" >
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        );
    };
}