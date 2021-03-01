import { render } from "@testing-library/react";
import React from "react";
import AppContext from "../../../contexts/ContextContainer/AppContext/AppContext";
import CheckOutOptions from "./CheckOutOptions/CheckOutOptions";
import OrderItems from './OrderItems/OrderItems';

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
        const cart = this.context.cartContext.cart;
        const order = Object.assign({}, this.context.ordersContext.order);
        console.group(order)
        if(cart.length === 0){
            this.props.history.push("/order");
        };  

        for(let i = 0; i < cart.length; i++){
            console.log(cart[i], order)
            order.subtotal = (Number(order.subtotal) + Number(cart[i].price));
        };
        console.log(cart, order);
        
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
            <section>
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