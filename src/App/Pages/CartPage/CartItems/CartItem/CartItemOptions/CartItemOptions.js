import React from "react";
import EditItemCustomizer from "./EditItemCustomizer/EditItemCustomizer";
import RemoveItemBtn from "./RemoveItemBtn/RemoveItemBtn";
import "./CartItemOptions.css";

export default class CartItemOptions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            toggleOptions: false,
            removeItem: false
        }
    }

    toggleOptions = ()=>{
        this.setState({
            toggleOptions: !this.state.toggleOptions
        });
    }

    toggleRemoveItem = ()=>{
        this.setState({
            removeItem: !this.state.removeItem
        });
    }
    
    render(){
        return (
            <section className="cart-item-options">
                <button onClick={this.toggleOptions}>Edit</button>
                <button onClick={this.toggleRemoveItem}>Remove</button>

                {this.state.toggleOptions ? <EditItemCustomizer index={this.props.index} toggleOptions={this.toggleOptions} menuItem={this.props.menuItem}/> : ""}
                {this.state.removeItem ? <RemoveItemBtn index={this.props.index} toggleRemoveItem={this.toggleRemoveItem}/> : ""}
            </section>
        );
    }
}