import React from "react";

export default class OrderItem extends React.Component{
    render(){
        return (
            <section>
                <h3>{this.props.orderItem.name}</h3>
                <p>Special requests: {this.props.special_request ? this.props.orderItem.special_request : "None provided"}</p>
                <p>Size: {this.props.orderItem.size}</p>
                <p>Quantity: {this.props.orderItem.quantity}</p>
                <p>Price: ${this.props.orderItem.price}</p>
            </section>
        )
    }
}