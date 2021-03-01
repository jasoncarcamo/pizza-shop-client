import React from "react";
import {Link} from "react-router-dom";
import PickUpForm from "./PickUpForm/PickUpForm";
import "./PickUpOptions.css";

export default class PickUpOptions extends React.Component{

    render(){
        return (
            <section id="pickup-options-section">
                <h2>Pick Up</h2>
                <p>Already a member? <Link to="/login">Log In</Link> to use your saved info</p>

                <PickUpForm setDefaultOrderType={this.props.setDefaultOrderType} history={this.props.history} handleCancel={this.handleCancel}/>
            </section>
        );
    };
}