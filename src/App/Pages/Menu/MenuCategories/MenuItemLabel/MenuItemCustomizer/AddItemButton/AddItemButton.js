import React from "react";
import AppContext from "../../../../../../../contexts/ContextContainer/AppContext/AppContext";
import AddConfirmation from "./AddConfirmation/AddConfirmation";

export default class AddItemButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addedItem: false
        }
    }

    static contextType = AppContext;

    setCartContext = ()=>{
        const orderItem = this.props.orderItem;
        const index = this.props.index;

        this.context.cartContext.setCart(orderItem);

        this.setState({
            addedItem: true
        });
    }

    toggleOptions = ()=>{
        this.props.toggleOptions();
    }

    render(){
        return (
            <>  
                <button onClick={this.setCartContext}>Add to cart</button>
                {this.state.addedItem ? <AddConfirmation toggleOptions={this.toggleOptions} orderItem={this.props.orderItem}/> : ""}
            </>
        );
    }
}