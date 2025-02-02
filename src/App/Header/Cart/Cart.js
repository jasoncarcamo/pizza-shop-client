import React from "react";
import AppContext from "../../../contexts/ContextContainer/AppContext/AppContext";
import CartOptions from "./CartOptions/CartOptions";
import "./Cart.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";

export default class cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            openOptions: false,
            screenWidth: window.innerWidth
        }
    }

    static contextType = AppContext;

    openOptions = (e)=>{
        this.setState({
            openOptions: true
        });
    }

    closeOptions = ()=>{
        this.setState({
            openOptions: false
        });
    }

    toggleOptions = ()=>{
        this.setState({
            openOptions: !this.state.openOptions
        });
    }

    toggleMobileMenu = ()=>{
        this.props.toggleMobileMenu();
    }

    render(){
        return (
            <section 
                id="cart-container"
            >
                <FontAwesomeIcon onMouseEnter={this.openOptions}  onClick={this.toggleOptions} icon={faShoppingCart} className="cart-icon"/> {this.context.cartContext.cart.length || ""}
                {this.state.openOptions ? <CartOptions toggleMobileMenu={this.toggleMobileMenu} toggleOptions={this.toggleOptions} closeOptions={this.closeOptions} history={this.props.history}/> : ""}
            </section>
        );
    };
}