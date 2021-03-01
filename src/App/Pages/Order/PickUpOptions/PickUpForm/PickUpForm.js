import React from "react";
import AppContext from "../../../../../contexts/ContextContainer/AppContext/AppContext";

export default class PickUpForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            customer_first_name: "",
            customer_last_name: "",
            customer_mobile_number: "",
            error: ""
        }
    }

    static contextType = AppContext;

    handleInput = (e)=>{
        this.setState({
            [e.target.name]: e.target.value,
            error: ""
        });

        this.updateOrder(e);
    }

    handleCancel = (e)=>{

        this.context.ordersContext.deleteOrder();

        this.toggleDefaultOrderype();
    }

    updateOrder = (e)=>{
        const order = this.context.ordersContext.order;

        order[e.target.name] = e.target.value;

        this.context.ordersContext.updateOrder(order);
    }

    handleStartOrdering = ()=>{
        const error = this.checkRequirements();

        if(error){
            this.setState({
                error
            });

            return;
        };

        this.props.history.push("/menu");
    }

    checkRequirements = ()=>{
        const state = Object.assign({}, this.state);
        let error;
        
        delete state.error;

        for(const key of Object.keys(state)){
            if(!state[key]){

                error = `Missing ${key.split("_").join(" ")}`;

                return error;
            };
        };
    }

    toggleDefaultOrderype = ()=>{
        this.props.setDefaultOrderType();
    }

    render(){
        return (
            <form>
                <fieldset>
                    <legend></legend>

                    <label htmlFor="pickup-first-name" className="pickup-label">
                        First name:
                    </label>
                    <input id="pickup-first-name" type="text" name="customer_first_name" value={this.state.customer_first_name} onChange={this.handleInput}/>

                    <label htmlFor="pickup-last-name" className="pickup-label">
                        Last name:
                    </label>
                    <input id="pickup-last-name" type="text" name="customer_last_name" value={this.state.customer_last_name} onChange={this.handleInput}/>

                    <label htmlFor="pickup-mobile-number" className="pickup-label">
                        Mobile number:
                    </label>
                    <input id="pickup-mobile-number" type="text" name="customer_mobile_number" value={this.state.customer_mobile_number} onChange={this.handleInput}/>

                    <p>{this.state.error ? this.state.error : ""}</p>

                    <button type="button" onClick={this.handleStartOrdering}>Start ordering</button>

                    <button  type="button" name="default" onClick={this.handleCancel}>Cancel</button>
                </fieldset>
            </form>
        )
    }
}