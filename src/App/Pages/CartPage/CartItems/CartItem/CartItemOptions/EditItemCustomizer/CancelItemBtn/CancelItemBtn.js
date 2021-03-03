import React from "react";
import "./CancelItemBtn.css";

export default class CancelItemBtn extends React.Component{

    toggleOptions = ()=>{
        this.props.toggleOptions();
    };

    render(){
        return <button onClick={this.toggleOptions}>Cancel</button>
    }
}