import React from "react";

export default class QuatityOption extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            quantity: 1
        };
    }

    addQuantity = ()=>{
        let quantity = this.state.quantity;

        quantity++;

        this.setState({
            quantity
        });

        this.updateOrderItem(quantity);
    }

    decreaseQuantity = ()=>{
        let quantity = this.state.quantity;

        quantity = --quantity;

        if(quantity === 0){
            return;
        }

        this.setState({
            quantity: quantity
        });

        this.updateOrderItem(quantity);
    }

    updateOrderItem = (quantity)=>{
        const orderItem = this.props.orderItem;

        orderItem.quantity = quantity;
        console.log(orderItem);
        this.props.updateOrderItem(orderItem);
    }

    render(){
        return (
            <section>
                <p>Quantity</p>

                <div>
                    <button onClick={this.decreaseQuantity}>-</button>
                    <p>{this.state.quantity}</p>
                    <button onClick={this.addQuantity}>+</button>
                </div>
            </section>
        );
    };
}