import React from "react";
import EditItemCustomizer from "./EditItemCustomizer/EditItemCustomizer";

export default class CartItemOptions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            toggleOptions: false
        }
    }

    toggleOptions = ()=>{
        this.setState({
            toggleOptions: !this.state.toggleOptions
        });
    }
    
    render(){
        return (
            <section>
                <button onClick={this.toggleOptions}>Edit</button>
                <button>Remove</button>

                {this.state.toggleOptions ? <EditItemCustomizer index={this.props.index} toggleOptions={this.toggleOptions} menuItem={this.props.menuItem}/> : ""}
            </section>
        );
    }
}