import React from "react";
import {Link} from "react-router-dom";
import PickUpForm from "./PickUpForm/PickUpForm";
import "./PickUpOptions.css";
import CustomerTokenService from "../../../../services/CustomerTokenService/CustomerTokenService";

export default class PickUpOptions extends React.Component{

    renderMemberMessage = ()=>{
        return (<p>Already a member? <Link to="/login">Log In</Link> to use your saved info.</p>);
    }

    renderRegisterMessage = ()=>{
        return (<p>Don't have an account? <Link to="/signup">Sign Up</Link></p>);
    }

    render(){
        return (
            <section id="pickup-options-section">
                <h2>Pick Up</h2>

                {!CustomerTokenService.hasToken() ? this.renderMemberMessage() : ""}

                <PickUpForm setDefaultOrderType={this.props.setDefaultOrderType} history={this.props.history} handleCancel={this.handleCancel}/>

                {!CustomerTokenService.hasToken() ? this.renderRegisterMessage() : ""}
            </section>
        );
    };
}