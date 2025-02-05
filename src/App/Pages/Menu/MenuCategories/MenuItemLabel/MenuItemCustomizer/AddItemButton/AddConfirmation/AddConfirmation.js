import React from "react";
import "./AddConfirmation.css";

export default class AddConfirmation extends React.Component{

    toggleOptions = ()=>{
        this.props.toggleOptions();
    }

    render(){
        return (
            <section className="add-confirmed-section">
                <p>Your {this.props.orderItem.category} has been added!</p>

                <button onClick={this.toggleOptions}>Yaye!</button>
            </section>
        )
    }
}