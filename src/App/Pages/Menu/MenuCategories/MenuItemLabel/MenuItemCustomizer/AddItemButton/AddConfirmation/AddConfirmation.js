import React from "react";

export default class AddConfirmation extends React.Component{

    toggleOptions = ()=>{
        this.props.toggleOptions();
    }

    render(){
        return (
            <section>
                <p>Your {this.props.orderItem.category} has been added!</p>

                <button onClick={this.toggleOptions}>Thanks!</button>
            </section>
        )
    }
}