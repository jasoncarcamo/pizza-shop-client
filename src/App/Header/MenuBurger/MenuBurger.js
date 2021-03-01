import React from "react";
import "./hamburger.css";
import "./MenuBurger.css";

export default class MenuBurger extends React.Component{

    toggleMobileMenu = ()=>{
        const menuBurger = document.getElementById("nav-burger");
        const linkContainer = document.getElementById("nav-links-container");

        menuBurger.classList.toggle("is-active");
        linkContainer.classList.toggle("show-links-container");
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