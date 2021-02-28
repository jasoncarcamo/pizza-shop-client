import React from "react";
import AppContext from "../../../../../../../contexts/ContextContainer/AppContext/AppContext";

export default class RemoveItemBtn extends React.Component{

    static contextType = AppContext;

    toggleRemoveItem = ()=>{
        this.props.toggleRemoveItem();
    }

    removeOrderItem = ()=>{
        const index = this.props.index;

        this.context.cartContext.deleteCart(index);

        this.toggleRemoveItem();
    }

    render(){
        return (
            <section>
                <p>Are you sure you want to remove this item from your cart?</p>

                <div>
                    <button onClick={this.removeOrderItem}>Yes</button>
                    <button onClick={this.toggleRemoveItem}>Nevermind</button>
                </div>
            </section>
        )
    }
}