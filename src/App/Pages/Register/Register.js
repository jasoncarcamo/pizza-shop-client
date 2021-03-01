import React from "react";
import RegisterForm from "./RegisterForm/RegisterForm";

export default class Register extends React.Component{
    render(){
        return (
            <section id="register-section">
                <RegisterForm history={this.props.history}/>
            </section>
        );
    };
}