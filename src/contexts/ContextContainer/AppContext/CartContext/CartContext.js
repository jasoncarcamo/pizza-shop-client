import React from "react";
import CartService from "../../../../services/CartService/CartService";

const CartContext = React.createContext({
    cart: [],
    setDefault: ()=>{},
    getCart: ()=>{},
    setCart: ()=>{},
    updateCart: ()=>{},
    deleteCart: ()=>{}
});

export default CartContext;

export class CartContextProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cart: []
        }
    }

    componentDidMount(){
        const cart = CartService.getCart();

        if(!cart){
            return;
        };

        this.setState({
            cart
        });
    }

    saveCart = (cart)=>{
        CartService.setCart(cart);
    }

    setDefault = ()=>{
        CartService.deleteCart();

        this.setState({
            cart: []
        });
    }

    getCart = ()=>{

    };

    setCart = (orderItem, index)=>{
        const cart = this.state.cart;
        let orderItemIndex = cart.indexOf(orderItem);

        if(orderItemIndex === -1){
            cart.push(orderItem);
        } else{
            cart[orderItemIndex] = orderItem;
        };

        this.saveCart(cart)
        
        this.setState({
            cart
        });
    };

    updateCart = (orderItem, index)=>{
        const cart = this.state.cart;

        cart[index] = orderItem;

        this.saveCart(cart);

        this.setState({
            cart
        });
    };

    deleteCart = (index)=>{
        const cart = this.state.cart;

        cart.splice(index, 1);

        this.setState({
            cart
        });
    }
    
    render(){
        const value = {
            cart: this.state.cart,
            setDefault: this.setDefault,
            getCart: this.getCart,
            setCart: this.setCart,
            updateCart: this.updateCart,
            deleteCart: this.deleteCart
        };

        return (
            <CartContext.Provider value={value}>
                {this.props.children}
            </CartContext.Provider>
        );
    };
}