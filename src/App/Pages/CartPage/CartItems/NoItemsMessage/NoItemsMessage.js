import React from "react";
import "./NoItemsMessage.css";

export default class NoItemsMessage extends React.Component{

    handleStartOrder = ()=>{
        this.props.history.push("/menu/pizza");
    }

    render(){
        return (
            <section id="no-items-section">
                <h2>You have not added any items to your cart yet</h2>

                <button onClick={this.handleStartOrder}>Start Ordering</button>
            </section>
        );
    };
}