import React from "react";

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

    render(){
        console.log(this.state);
;        return (
            <section>
                <p>Choose a size:</p>

                <ul>
                    <li>
                        <input type="radio" name="price" value={this.props.menuItem.price_small} className="size-option-input" checked={this.props.orderItem.size === "size_small"} onChange={this.handleSize}/>
                        <label htmlFor="" className="size-option-label"> Small {this.props.menuItem.size_small}</label>
                    </li>

                    <li>
                        <input type="radio" name="price" value={this.props.menuItem.price_medium} className="size-option-input" checked={this.props.orderItem.size === "size_medium"} onChange={this.handleSize}/>
                        <label htmlFor="" className="size-option-label"> Medium {this.props.menuItem.size_medium}</label>
                    </li>

                    <li>
                        <input type="radio" name="price" value={this.props.menuItem.price_large} className="size-option-input" checked={this.props.orderItem.size === "size_large"} onChange={this.handleSize}/>
                        <label htmlFor="" className="size-option-label"> Large {this.props.menuItem.size_large}</label>
                    </li>
                </ul>
            </section>
        );
    };
}