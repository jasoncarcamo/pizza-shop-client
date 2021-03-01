import React from "react";
import AppContext from "../../../../contexts/ContextContainer/AppContext/AppContext";
import ConfirmCancel from "./ConfirmCancel/ConfirmCancel";

export default class CheckOutOptions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cancelOrder: false
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

    handleCancel = ()=>{

    }

    render(){
        return (
           <section>
               <button>Place order</button>
               
               <div>
                    <button onClick={this.toEditCart}>Edit cart</button>
                    <button onClick={this.toggleCancelOrder}>Cancel order</button>
               </div>

               {this.state.cancelOrder ? <ConfirmCancel toggleCancelOrder={this.toggleCancelOrder}/> : ""}
           </section> 
        );
    };
}