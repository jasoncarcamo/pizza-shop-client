import React from "react";
import AppContext from "../../../contexts/ContextContainer/AppContext/AppContext";
import CheckOutOptions from "./CheckOutOptions/CheckOutOptions";
import OrderItems from './OrderItems/OrderItems';
import "./Checkout.css";
import CartService from "../../../services/CartService/CartService";
import OrderService from "../../../services/OrderServce/OrderServce";

export default class Checkout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cart: [],
            order: {}
        }
    }

    static contextType = AppContext;

    componentDidMount(){
        const cart = CartService.getCart();
        const order = OrderService.getOrder();

        if(!order){
            return this.props.history.push("/order");
        };

        if(!cart){
            return this.props.history.push("/cart/edit");
        };  

        if(!order.subtotal){
            order.subtotal = 0;
        };

        for(let i = 0; i < cart.length; i++){
            order.subtotal = Number(Number(order.subtotal).toFixed(2)) + Number(Number(cart[i].price).toFixed(2)) ;
        };
        
        this.setState({
            cart,
            order
        });
    }

    componentDidUpdate(){
        const cart = this.context.cartContext.cart;

        if(cart.length === 0){
            this.props.history.push("/cart/edit");
        };  
    }

    render(){
        return (
            <section id="checkout-section">
                <h2>Check Out</h2>

                <section id="checkout-info-container">
                    <OrderItems/>

                    <CheckOutOptions history={this.props.history} order={this.state.order}/>
                </section>
            </section>
        );
    };
}