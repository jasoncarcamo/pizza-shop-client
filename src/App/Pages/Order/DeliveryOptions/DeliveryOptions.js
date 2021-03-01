import React from "react";
import {Link} from "react-router-dom";
import DeliveryForm from "./DeliveryForm/DeliveryForm";
import "./DeliveryOptions.css";

export default class DeliveryOptions extends React.Component{

    handleCancel = (e)=>{
        this.props.startOrder(e);
    }

    render(){
        return (
            <section id="delivery-options-section">
                <h2>Delivery</h2>
                <p>Already a member? <Link to="/login">Log In</Link> to use your saved info</p>

                <DeliveryForm setDefaultOrderType={this.props.setDefaultOrderType} history={this.props.history} handleCancel={this.handleCancel}/>
            </section>
        );
    };
}