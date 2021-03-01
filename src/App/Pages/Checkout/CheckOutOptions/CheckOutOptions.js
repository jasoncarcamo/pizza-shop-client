import React from "react";
import AppContext from "../../../../contexts/ContextContainer/AppContext/AppContext";
import ConfirmCancel from "./ConfirmCancel/ConfirmCancel";
import ConfirmPlace from "./ConfirmPlace/ConfirmPlace";

export default class CheckOutOptions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cancelOrder: false,
            placeOrder: false
        }
    }

    static contextType = AppContext;

    toEditCart = ()=>{
        this.props.history.push("/cart/edit");
    }

    toggleCancelOrder = ()=>{
        this.setState({
            cancelOrder: !this.state.cancelOrder
        });
    }

    togglePlaceOrder = ()=>{
        this.setState({
            placeOrder: !this.state.placeOrder
        });
    }

    handleCancel = ()=>{

    }

    render(){
        return (
           <section>
               <button onClick={this.togglePlaceOrder}>Place order</button>
               
               <div>
                    <button onClick={this.toEditCart}>Edit cart</button>
                    <button onClick={this.toggleCancelOrder}>Cancel order</button>
               </div>

               {this.state.cancelOrder ? <ConfirmCancel toggleCancelOrder={this.toggleCancelOrder}/> : ""}
               {this.state.placeOrder ? <ConfirmPlace order={this.props.order} togglePlaceOrder={this.togglePlaceOrder} history={this.props.history}/> : ""}
           </section> 
        );
    };
}