import React from "react";
import AppContext from "../../../contexts/ContextContainer/AppContext/AppContext";
import CartOptions from "./CartOptions/CartOptions";

export default class cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            openOptions: false
        }
    }

    static contextType = AppContext;

    openOptions = (e)=>{
        this.setState({
            openOptions: true
        });
    }

    closeOptions = ()=>{
        this.setState({
            openOptions: false
        });
    }

    render(){
        return (
            <section 
                id="cart-container"
                onMouseEnter={this.openOptions} 
                onMouseLeave={this.closeOptions}
            >
                <p>
                    Cart {this.context.cartContext.cart.length || ""}
                </p>

                {this.state.openOptions ? <CartOptions history={this.props.history}/> : ""}
            </section>
        );
    };
}