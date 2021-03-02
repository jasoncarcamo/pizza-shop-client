import React from "react";
import AppContext from "../../../../contexts/ContextContainer/AppContext/AppContext";
import OrderItem from "./OrderItem/OrderItem";
import "./OrderItems.css";

export default class OrderItems extends React.Component{

    static contextType = AppContext;

    renderOrderItems = ({cartContext})=>{
        let orderItems = cartContext.cart;

        orderItems = orderItems.map((orderItem, i)=>{
            return (
                <li key={i} className="order-item-list-item">
                    <OrderItem orderItem={orderItem}/>
                </li>
            );
        });

        return orderItems;
    }

    render(){
        return (
            <ul id="order-item-list">
                {this.renderOrderItems(this.context)}
            </ul>
        )
    }
}