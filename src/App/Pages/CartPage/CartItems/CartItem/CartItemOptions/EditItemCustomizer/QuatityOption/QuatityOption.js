import React from "react";
import AppContext from "../../../../../../../../contexts/ContextContainer/AppContext/AppContext";

export default class QuatityOption extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            quantity: this.props.orderItem.quantity
        };
    }

    static contextType = AppContext;

    addQuantity = ()=>{
        let quantity = this.props.orderItem.quantity;

        quantity++;

        this.setState({
            quantity
        });

        this.updateOrderItem(quantity);
    }

    decreaseQuantity = ()=>{
        let quantity = this.props.orderItem.quantity;

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
        const menuItem = this.context.menuItemsContext.menuItems[orderItem.category][orderItem.id];
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
                    <p>{this.props.orderItem.quantity}</p>
                    <button onClick={this.addQuantity}>+</button>
                </div>
            </section>
        );
    };
}