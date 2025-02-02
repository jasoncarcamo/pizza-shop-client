import React from "react";
import {Link} from "react-router-dom";
import DeliveryForm from "./DeliveryForm/DeliveryForm";
import "./DeliveryOptions.css";
import CustomerTokenService from "../../../../services/CustomerTokenService/CustomerTokenService";

export default class DeliveryOptions extends React.Component{

    handleCancel = (e)=>{
        this.props.startOrder(e);
    }

    renderMemberMessage = ()=>{
        return (<p>Already a member? <Link to="/login">Log In</Link> to use your saved info.</p>);
    }

    renderRegisterMessage = ()=>{
        return (<p>Don't have an account? <Link to="/signup">Sign Up</Link></p>);
    }

    render(){
        return (
            <section id="delivery-options-section">
                <h2>Delivery</h2>

                {!CustomerTokenService.hasToken() ? this.renderMemberMessage() : ""}

                <DeliveryForm setDefaultOrderType={this.props.setDefaultOrderType} history={this.props.history} handleCancel={this.handleCancel}/>

                {!CustomerTokenService.hasToken() ? this.renderRegisterMessage() : ""}
            </section>
        );
    };
}