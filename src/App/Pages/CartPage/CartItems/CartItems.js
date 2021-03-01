import React from "react";
import AppContext from "../../../../contexts/ContextContainer/AppContext/AppContext";
import CartItem from "./CartItem/CartItem";
import NoItemsMessage from "./NoItemsMessage/NoItemsMessage";

export default class CartItems extends React.Component{

    static contextType = AppContext;

    renderCartItems = ({cartContext})=>{
        let cart = cartContext.cart;

        if(cart.length === 0){
            return <NoItemsMessage history={this.props.history}/>
        }

        cart = cart.map((cartItem, i)=>{
            return <CartItem key={i} index={i} cartItem={cartItem}/>
        });

        return cart;
    }

    toCheckout = ()=>{
        this.props.history.push("/cart/checkout")
    }

    render(){
        return (
            <>
                {this.renderCartItems(this.context)}

                {this.context.cartContext.cart.length > 0 ? <button onClick={this.toCheckout}>Checkout</button> : ""}
            </>
        );
    };
}