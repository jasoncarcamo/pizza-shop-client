import React from "react";
import AppContext from "../../../../../../../../contexts/ContextContainer/AppContext/AppContext";
import "./SizeOptions.css";

export default class SizeOptions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            price: "",
            size: "",
        }
    }

    static contextType = AppContext;

    componentDidMount(){
        this.setDefaultPrice();
    }

    setDefaultPrice = ()=>{
        this.setState({
            price: this.props.menuItem.price
        });
    }

    handleSize = (e)=>{
        const orderItem = this.props.orderItem;

        orderItem.price = Math.round((e.target.value * orderItem.quantity) * 100 + Number.EPSILON) / 100;

        this.setState({
            price: orderItem.price
        });

        this.setSize(e);
    }

    setSize = (e)=>{
        const orderItem = this.props.orderItem;
        const menuItem = this.context.menuItemsContext.menuItems[orderItem.category][orderItem.id];

        for(const key of Object.keys(menuItem)){
            if(menuItem[key] === e.target.value){
                orderItem.size = `size_${key.split("_")[1]}`;
            };
        };

        this.setState({
            size: orderItem.size
        });

        this.updateOrderItem(orderItem);
    }

    updateOrderItem = (orderItem)=>{
        this.props.updateOrderItem(orderItem);
    }

    getInputValue = (price)=>{
        const orderItem = this.props.orderItem;

        return this.context.menuItemsContext.menuItems[orderItem.category][orderItem.id][price];
    }

    getMenuItem = ()=>{

    }

    renderMediumSizeOption = ()=>{
        if(Math.round(this.context.menuItemsContext.menuItems[this.props.orderItem.category][this.props.orderItem.id].price_medium) !== 0){
            return (
                <li className="size-option-section-list-item">
                    <input type="radio" name="price" value={this.context.menuItemsContext.menuItems[this.props.orderItem.category][this.props.orderItem.id].price_medium} className="size-option-input" checked={this.props.orderItem.size === "size_medium"} onChange={this.handleSize}/>
                    <label htmlFor="" className="size-option-label"> Medium {this.context.menuItemsContext.menuItems[this.props.orderItem.category][this.props.orderItem.id].size_medium}</label>
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
                        <input type="radio"  name="price" value={this.context.menuItemsContext.menuItems[this.props.orderItem.category][this.props.orderItem.id].price_small} className="size-option-input" checked={this.props.orderItem.size === "size_small"} onChange={this.handleSize}/>
                        <label htmlFor="" className="size-option-label"> Small {this.context.menuItemsContext.menuItems[this.props.orderItem.category][this.props.orderItem.id].size_small}</label>
                    </li>

                    {this.renderMediumSizeOption()}

                    <li className="size-option-section-list-item">
                        <input type="radio" name="price" value={this.context.menuItemsContext.menuItems[this.props.orderItem.category][this.props.orderItem.id].price_large} className="size-option-input" checked={this.props.orderItem.size === "size_large"} onChange={this.handleSize}/>
                        <label htmlFor="" className="size-option-label"> Large {this.context.menuItemsContext.menuItems[this.props.orderItem.category][this.props.orderItem.id].size_large}</label>
                    </li>
                </ul>
            </section>
        );
    };
}