import React from "react";
import "./EditConfirmation.css";

export default class EditConfirmation extends React.Component{

    toggleOptions = ()=>{
        this.props.toggleOptions();
    }

    render(){
        return (
            <section className="add-confirmed-section">
                <p>Your {this.props.orderItem.category} has been edited!</p>

                <button onClick={this.toggleOptions}>Yaye!</button>
            </section>
        );
    }
}