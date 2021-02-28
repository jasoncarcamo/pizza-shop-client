import React from "react";
import CartService from "../../../../services/CartService/CartService";

const CartContext = React.createContext({
    cart: [],
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
        console.log("Mounted");
        const cart = CartService.getCart();

        if(!cart){
            return;
        };

        this.setCart(cart);
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
        
        this.setState({
            cart
        });
    };

    updateCart = (orderItem, index)=>{
        const cart = this.state.cart;

        cart[index] = orderItem;

        this.setState({
            cart
        });
    };

    deleteCart = (index)=>{
        const cart = this.state.cart;

        cart.splice(index, 1);

        console.log(cart);

        this.setState({
            cart
        });
    }
    
    render(){
        const value = {
            cart: this.state.cart,
            getCart: this.getCart,
            setCart: this.setCart,
            updateCart: this.updateCart,
            deleteCart: this.deleteCart
        };
        console.log(value);
        return (
            <CartContext.Provider value={value}>
                {this.props.children}
            </CartContext.Provider>
        );
    };
}