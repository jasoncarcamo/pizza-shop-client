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
        const menuItem = this.props.menuItem;
        let sizeType;
        let priceType;

        orderItem.quantity = quantity;

        for(const key of Object.keys(menuItem)){
            if(orderItem.size === key){
                sizeType = key;
            }
        };

        priceType = `price_${sizeType.split("_")[1]}`;

        orderItem.price = Math.round(Number((menuItem[priceType]) * quantity) * 100 + Number.EPSILON) / 100;
        
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