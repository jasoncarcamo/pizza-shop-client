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
        console.log(this.props)
        this.setState({
            price: this.props.menuItem.price_small
        });
    }

    handlePrice = (e)=>{
        const orderItem = this.props.orderItem;

        orderItem.price = e.target.value;

        this.setState({
            price: orderItem.price
        });

        this.setSize(e);
    }

    setSize = (e)=>{
        const menuItem = this.props.menuItem;
        const orderItem = this.props.orderItem;

        for(const key of Object.keys(menuItem)){
            if(menuItem[key] === e.target.value){
                orderItem.size = key;
            };
        };

        console.log(orderItem);

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
                        <input type="radio" name="price" value={this.props.menuItem.price_small} className="size-option-input" checked={this.state.price === this.props.menuItem.price_small} onChange={this.handlePrice}/>
                        <label htmlFor="" className="size-option-label"> Small {this.props.menuItem.size_small}</label>
                    </li>

                    <li>
                        <input type="radio" name="price" value={this.props.menuItem.price_medium} className="size-option-input" checked={this.state.price === this.props.menuItem.price_medium} onChange={this.handlePrice}/>
                        <label htmlFor="" className="size-option-label"> Medium {this.props.menuItem.size_medium}</label>
                    </li>

                    <li>
                        <input type="radio" name="price" value={this.props.menuItem.price_large} className="size-option-input" checked={this.state.price === this.props.menuItem.price_large} onChange={this.handlePrice}/>
                        <label htmlFor="" className="size-option-label"> Large {this.props.menuItem.size_large}</label>
                    </li>
                </ul>
            </section>
        );
    };
}