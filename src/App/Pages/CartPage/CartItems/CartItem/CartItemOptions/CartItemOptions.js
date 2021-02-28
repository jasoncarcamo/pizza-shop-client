import React from "react";
import MenuItemCustomizer from "../../../../Menu/MenuCategories/MenuItemLabel/MenuItemCustomizer/MenuItemCustomizer";

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

                {this.state.toggleOptions ? <MenuItemCustomizer toggleOptions={this.toggleOptions} menuItem={this.props.menuItem}/> : ""}
            </section>
        );
    }
}