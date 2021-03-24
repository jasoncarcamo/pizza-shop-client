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
        console.log(cart)
        if(!cart){
            return this.props.history.push("/order");
        };  

        if(!order.subtotal){
            order.subtotal = 0;
        };

        for(let i = 0; i < cart.length; i++){
            order.subtotal = Number(order.subtotal) + Number(cart[i].price) ;
        };
        
        this.setState({
            cart,
            order
        });
    }

    componentDidUpdate(){
        const cart = this.context.cartContext.cart;

        if(cart.length === 0){
            this.props.history.push("/order");
        };  
    }

    render(){
        return (
            <section id="checkout-section">
                <h2>Check Out</h2>

                <p><strong>Name: </strong>{this.state.order.customer_first_name} {this.state.order.customer_last_name}</p>
                <p><strong>Order type: </strong>{this.state.order.order_type}</p>
                <p><strong>Price: </strong>${this.state.order.subtotal}</p>

                <OrderItems/>

                <CheckOutOptions history={this.props.history} order={this.state.order}/>
            </section>
        );
    };
}