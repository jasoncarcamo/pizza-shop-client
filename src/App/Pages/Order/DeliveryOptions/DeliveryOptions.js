import React from "react";
import {Link} from "react-router-dom";
import DeliveryForm from "./DeliveryForm/DeliveryForm";

export default class DeliveryOptions extends React.Component{

    handleCancel = (e)=>{
        this.props.startOrder(e);
    }

    render(){
        return (
            <section>
                <p>Already a member? <Link to="/login">Log In</Link></p>

                <DeliveryForm setDefaultOrderType={this.props.setDefaultOrderType} history={this.props.history} handleCancel={this.handleCancel}/>
            </section>
        );
    };
}