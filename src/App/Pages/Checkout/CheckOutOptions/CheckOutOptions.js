import React from "react";
import AppContext from "../../../../contexts/ContextContainer/AppContext/AppContext";
import ConfirmCancel from "./ConfirmCancel/ConfirmCancel";
import ConfirmPlace from "./ConfirmPlace/ConfirmPlace";
import "./CheckOutOptions.css";
import OrderTypeOptions from "./OrderTypeOptions/OrderTypeOptions";

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

    renderRoundedTotal = ()=>{
        const subtotal = this.props.order.subtotal;

        if(!subtotal){
            return "";
        } else{
            return subtotal.toFixed(2);
        }
    }

    displayAddress = ()=>{
        const order = this.props.order;

        if(order.order_type !== "Delivery"){
            return "";
        };

        return (
            <p>
                <strong>Address: </strong> {order.customer_address}, {order.customer_city}, {order.customer_state}, {order.customer_zip_code}
            </p>   
        );
    }

    renderMobileNumber = (number)=>{
            let renderedNumber;
            let areaCode;
            let secPart;
            let lastPart;

            if(!number){
                return "";
            }

           renderedNumber = number.split("");

            if(renderedNumber.length > 10){
                renderedNumber.shift();
            };

            areaCode = renderedNumber.slice(0,3).join("");
            secPart = renderedNumber.slice(3, 6).join("");
            lastPart = renderedNumber.slice(6, 10).join("");

            renderedNumber = `(${areaCode}) ${secPart}-${lastPart}`;
            
            return renderedNumber;
    }

    render(){
        return (
           <section className="checkout-options">

                <div className="checkout-name-container">
                    <p><strong>Name: </strong>{this.props.order.customer_first_name} {this.props.order.customer_last_name}</p>
                    <p><strong>Price: </strong>${this.renderRoundedTotal()}</p>
                    <p><strong>Mobile number: </strong>{this.renderMobileNumber(this.props.order.customer_mobile_number)}</p>
                    {this.displayAddress()}
                </div>
                
                <OrderTypeOptions order={this.props.order}/>
               
                <div className="checkout-options-container">
                    <button className="checkout-options-place-order" onClick={this.togglePlaceOrder}>Place order</button>
                    <button onClick={this.toEditCart}>Edit cart</button>
                    <button onClick={this.toggleCancelOrder}>Cancel order</button>
                </div>

                {this.state.cancelOrder ? <ConfirmCancel toggleCancelOrder={this.toggleCancelOrder}/> : ""}
                {this.state.placeOrder ? <ConfirmPlace order={this.props.order} togglePlaceOrder={this.togglePlaceOrder} history={this.props.history}/> : ""}
           </section> 
        );
    };
}