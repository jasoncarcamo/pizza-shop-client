import React from "react";
import AppContext from "../../../../../../../../contexts/ContextContainer/AppContext/AppContext";
import EditConfirmation from "./EditConfirmation/EditConfirmation";

export default class EditItemButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addedItem: false
        }
    }

    static contextType = AppContext;

    editCartContext = ()=>{
        const orderItem = this.props.orderItem;
        const index = this.props.index;

        this.context.cartContext.updateCart(orderItem, index);

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
                <button onClick={this.editCartContext}>Confirm edit</button>
                {this.state.addedItem ? <EditConfirmation toggleOptions={this.toggleOptions} orderItem={this.props.orderItem}/> : ""}
            </>
        );
    }
}