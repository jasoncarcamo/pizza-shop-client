import React from "react";
import "./SizeOptions.css";

export default class SizeOptions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            price: ""
        }
    }

    componentDidMount(){
        this.setDefaultPrice();
    }

    setDefaultPrice = ()=>{
        this.setState({
            price: this.props.menuItem.price_small
        });
    }

    handleSize = (e)=>{
        const orderItem = this.props.orderItem;

        orderItem.price = Math.round((e.target.value * orderItem.quantity) * 100 + Number.EPSILON) / 100;

        this.setState({
            size: orderItem.size
        });

        this.setSize(e);
    }

    setSize = (e)=>{
        const menuItem = this.props.menuItem;
        const orderItem = this.props.orderItem;

        for(const key of Object.keys(menuItem)){
            if(menuItem[key] === e.target.value){
                orderItem.size = `size_${key.split("_")[1]}`;
            };
        };

        this.updateOrderItem(orderItem);
    }

    updateOrderItem = (orderItem)=>{
        this.props.updateOrderItem(orderItem);
    }

    renderInputs = ()=>{
        const menuItemPrices = {
            price_small: this.props.menuItem.price_small,
            price_medium: this.props.menuItem.price_medium,
            price_large: this.props.menuItem.price_large
        };
        let inputs = [];
        let index = 0;
        
        for(const key of Object.keys(menuItemPrices)){
            index++;

            if(menuItemPrices[key]){
                inputs.push((
                    <li key={index}>
                        <input id={`size-option-${key}`} type="radio" name="price" value={this.props.menuItem[`price_${key.split("_")[2]}`]} className="size-option-input" checked={this.props.orderItem.size === "size_small"} onChange={this.handleSize}/>
                        <label htmlFor={`size-option-${key}`} className="size-option-label"> Small {this.props.menuItem[`size_${key.split("_")[2]}`]}</label>
                    </li>
                ));
            };
        };

        return inputs;

    }

    renderMediumSizeOption = ()=>{
        if(Math.round(this.props.menuItem.price_medium) !== 0){
            return (
                <li className="size-option-section-list-item">
                    <input type="radio" name="price" value={this.props.menuItem.price_medium} className="size-option-input" checked={this.props.orderItem.size === "size_medium"} onChange={this.handleSize}/>
                    <label htmlFor="" className="size-option-label"> Medium {this.props.menuItem.size_medium}</label>
                </li>
            );
        };
    }

    render(){
;        return (
            <section className="size-option-section">
                <p><strong>Choose a size:</strong></p>

                <ul className="size-option-section-list">
                    <li className="size-option-section-list-item">
                        <input type="radio" name="price" value={this.props.menuItem.price_small} className="size-option-input" checked={this.props.orderItem.size === "size_small"} onChange={this.handleSize}/>
                        <label htmlFor="" className="size-option-label"> Small {this.props.menuItem.size_small}</label>
                    </li>

                    {this.renderMediumSizeOption()}

                    <li className="size-option-section-list-item">
                        <input type="radio" name="price" value={this.props.menuItem.price_large} className="size-option-input" checked={this.props.orderItem.size === "size_large"} onChange={this.handleSize}/>
                        <label htmlFor="" className="size-option-label"> Large {this.props.menuItem.size_large}</label>
                    </li>
                </ul>
            </section>
        );
    };
}