import React from "react";

export default class EditConfirmation extends React.Component{

    toggleOptions = ()=>{
        this.props.toggleOptions();
    }

    render(){
        return (
            <section>
                <p>Your {this.props.orderItem.category} has been edited!</p>

                <button onClick={this.toggleOptions}>Thanks!</button>
            </section>
        )
    }
}