import React from "react";
import "./LogIn.css";
import LogInForm from "./LogInForm/LogInForm";

export default class LogIn extends React.Component{
    render(){
        return (
            <section id="log-in-section">
                <LogInForm history={this.props.history}/>
            </section>          
        );
    };
};