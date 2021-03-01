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
            openOptions: false
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

    render(){
        return (
            <section 
                id="cart-container"
                onMouseEnter={this.openOptions} 
            >
                <p>
                    <FontAwesomeIcon icon={faShoppingCart}/> {this.context.cartContext.cart.length || ""}
                </p>

                {this.state.openOptions ? <CartOptions closeOptions={this.closeOptions} history={this.props.history}/> : ""}
            </section>
        );
    };
}