import React from "react";
import {Link} from "react-router-dom";
import PickUpForm from "./PickUpForm/PickUpForm";

export default class PickUpOptions extends React.Component{

    render(){
        return (
            <section>
                <p>Already a member? <Link to="/login">Log In</Link></p>

                <PickUpForm setDefaultOrderType={this.props.setDefaultOrderType} history={this.props.history} handleCancel={this.handleCancel}/>
            </section>
        );
    };
}