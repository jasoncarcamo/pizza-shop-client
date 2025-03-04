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
    
    componentDidMount(){
        window.addEventListener("resize",()=>{
            this.setState({
                screenWidth: window.innerWidth
            });
        });
    }

    openOptions = (e)=>{

        if(this.state.screenWidth <=1300){
            return;
        };

        this.setState({
            openOptions: true
        });
    }

    closeOptions = ()=>{
        if(this.state.screenWidth <=1300){
            return;
        };

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
                id="cart-container" onMouseLeave={this.closeOptions} 
            >
                <FontAwesomeIcon onMouseEnter={this.openOptions} onClick={this.toggleOptions} icon={faShoppingCart} className="cart-icon"/> {this.context.cartContext.cart.length || ""}
                {this.state.openOptions ? <CartOptions toggleMobileMenu={this.toggleMobileMenu} toggleOptions={this.toggleOptions} closeOptions={this.closeOptions} history={this.props.history}/> : ""}
            </section>
        );
    };
}