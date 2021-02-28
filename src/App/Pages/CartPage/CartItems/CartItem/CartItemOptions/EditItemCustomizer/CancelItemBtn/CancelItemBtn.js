import React from "react";

export default class CancelItemBtn extends React.Component{

    toggleOptions = ()=>{
        this.props.toggleOptions();
    };

    render(){
        return <button onClick={this.toggleOptions}>Cancel</button>
    }
}