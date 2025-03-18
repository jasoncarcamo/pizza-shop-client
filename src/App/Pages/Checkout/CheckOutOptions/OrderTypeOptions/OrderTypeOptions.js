import React from "react";
import AppContext from "../../../../../contexts/ContextContainer/AppContext/AppContext";
import "./OrderTypeOptions.css";

export default class OrderTypeOptions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            "order_type": "Pick Up",
            "time_placed": "ASAP"
        }
    }

    static contextType = AppContext;

    handleOrderType = (e)=>{
        let order = this.props.order; 
        
        order.order_type = e.target.value;

        this.updateOrder(order);

        this.setState({
            "order_type": e.target.value
        });
    }

    handleOrderTimeType = (e)=>{
        let order = this.props.order;

        if(e.target.value === "ASAP"){
            order.time_placed = new Date();
        } else{
            order.time_placed = "Later";
        };

        this.updateOrder(order);

        this.setState({
            "time_placed": e.target.value
        });
    }

    handleLaterTime = (e)=>{
        let order = this.props.order;

        order.time_placed = e.target.value;

        this.updateOrder(order);

        this.setState({
            "time_placed": order.time_placed
        })
    }

    updateOrder = (order)=>{
        this.context.ordersContext.updateOrder(order);
    }

    renderDateTime = ()=>{
        return (
            <div>
                <input type="datetime-local" name="time_placed" value={this.props.order.time_placed} onChange={this.handleLaterTime} min={new Date().toISOString()}/>
            </div>
        );
    }

    render(){
        return (
            <section id="checkout-order-type-section">

                <form id="checkout-order-type-container">
                    <p><strong>Order type:</strong></p>
                    <fieldset id="checkout-order-type-fieldset">
                        <div>
                            <input type="radio" name="order_type" value="Pick up" onChange={this.handleOrderType} checked={this.props.order.order_type === "Pick up"}/>
                            <label htmlFor="">Pick Up</label>
                        </div>
                        
                        <div>
                            <input type="radio" name="order_type" value="Delivery" onChange={this.handleOrderType} checked={this.props.order.order_type === "Delivery"}/>
                            <label htmlFor="">Delivery</label>
                        </div>
                    </fieldset>
                </form>

                <form id="checkout-order-time-form">
                    <p><strong>When?</strong></p>
                    <fieldset id="checkout-order-time-fieldset">
                        <div>
                            <input type="radio" name="time_placed" value="ASAP" onChange={this.handleOrderTimeType} checked={new Date(this.props.order.time_placed) <= new Date()}/>
                            <label htmlFor="">ASAP!</label>
                        </div>
                        
                        <div>
                            <input type="radio" name="time_placed" value="Later" onChange={this.handleOrderTimeType} checked={this.props.order.time_placed === "Later"  || new Date(this.props.order.time_placed) > new Date()}/>
                            <label htmlFor="">Later</label>
                        </div>

                        {this.props.order.time_placed === "Later"  || new Date(this.props.order.time_placed) > new Date() ? this.renderDateTime() : ""}
                    </fieldset>
                </form>
            </section>
        );
    };
}