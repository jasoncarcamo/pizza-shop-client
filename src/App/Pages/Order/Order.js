import React from "react";
import AppContext from "../../../contexts/ContextContainer/AppContext/AppContext";
import PickUpOptions from "./PickUpOptions/PickUpOptions";
import DeliveryOptions from "./DeliveryOptions/DeliveryOptions";
import "./Order.css";

export default class Order extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            order_type: "default"
        }
    }

    static contextType = AppContext;

    componentDidMount(){
        if(this.context.ordersContext.order.order_started){
            this.props.history.push("/menu/pizza")
        }
    }

    startOrder = (e)=>{
        
        this.setState({
            order_type: e.target.name
        });
    }

    setDefaultOrderType = ()=>{
        this.setState({
            order_type: "default"
        });
    }

    render(){
        return (
            <section id="order-type-section">
                
                <section id="order-type-options">
                    <button name="Pick up" onClick={this.startOrder}>Pick up</button>
                    <p>Or</p>
                    <button name="Delivery" onClick={this.startOrder}>Delivery</button>
                </section>

                {this.state.order_type === "Pick up" ? <PickUpOptions setDefaultOrderType={this.setDefaultOrderType} history={this.props.history} startOrder={this.startOrder}/> : ""}
                {this.state.order_type === "Delivery" ? <DeliveryOptions setDefaultOrderType={this.setDefaultOrderType}  history={this.props.history} startOrder={this.startOrder}/> : ""}
            </section>
        )
    }
}