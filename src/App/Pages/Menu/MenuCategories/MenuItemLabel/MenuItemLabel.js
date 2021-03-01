import React from "react";
import MenuItemCustomizer from "./MenuItemCustomizer/MenuItemCustomizer";

export default class MenuItemLabel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            toggleOptions: false
        };
    };

    toggleOptions = ()=>{
        this.setState({
            toggleOptions: !this.state.toggleOptions
        });
    }

    render(){
        return (
            <section>
                <h2>{this.props.menuItem.name}</h2>
                <p>
                    <strong>
                        Starting price: ${this.props.menuItem.price_small}
                    </strong>
                </p>
                <p>{this.props.menuItem.description}</p>

                <button onClick={this.toggleOptions}>Customize Order</button>

                {this.state.toggleOptions ? <MenuItemCustomizer index={this.props.index} toggleOptions={this.toggleOptions} menuItem={this.props.menuItem}/> : ""}
            </section>
        );
    };
}