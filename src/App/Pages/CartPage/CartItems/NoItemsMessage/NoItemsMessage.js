import React from "react";

export default class NoItemsMessage extends React.Component{

    handleStartOrder = ()=>{
        this.props.history.push("/order");
    }

    render(){
        return (
            <section>
                <p>You have not added any items to your cart yet</p>

                <button onClick={this.handleStartOrder}>Start Ordering</button>
            </section>
        );
    };
}