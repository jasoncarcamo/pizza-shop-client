import React from "react";

const CartContext = React.createContext({
    cart: {}
});

export class CartContextProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cart: {},
        }
    }

    getCart = ()=>{

    };

    setCart = (cart)=>{
        this.setState({
            cart
        });
    };

    updateCart = (cart)=>{
        this.setCart(cart);
    };

    deleteCart = ()=>{
        const cart = {};

        this.setCart(cart);
    }
    
    render(){
        const value = {

        };

        return (
            <CartContext.Provider value={value}>
                {this.props.children}
            </CartContext.Provider>
        );
    };
}