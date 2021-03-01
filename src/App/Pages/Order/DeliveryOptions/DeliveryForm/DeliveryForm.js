import React from "react";
import AppContext from "../../../../../contexts/ContextContainer/AppContext/AppContext";

export default class DeliveryForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            customer_first_name: "",
            customer_last_name: "",
            customer_mobile_number: "",
            customer_address: "",
            customer_city: "",
            customer_state: "Ny",
            customer_zip_code: "",
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
        console.log(this.context)
        this.context.ordersContext.deleteOrder();
        this.toggleDefaultOrderype();
    }

    toggleDefaultOrderype = ()=>{
        this.props.setDefaultOrderType();
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

    render(){
        return (
            <form>
                <fieldset>
                    <legend></legend>

                    <label htmlFor="delivery-first-name" className="delivery-label">
                        First name:
                    </label>
                    <input id="delivery-first-name" type="text" name="customer_first_name" value={this.state.customer_first_name} onChange={this.handleInput}/>

                    <label htmlFor="delivery-last-name" className="delivery-label">
                        Last name:
                    </label>
                    <input id="delivery-last-name" type="text" name="customer_last_name" value={this.state.customer_last_name} onChange={this.handleInput}/>

                    <label htmlFor="delivery-mobile-number" className="delivery-label">
                        Mobile number:
                    </label>
                    <input id="delivery-mobile-number" type="text" name="customer_mobile_number" value={this.state.customer_mobile_number} onChange={this.handleInput}/>

                    <label htmlFor="delivery-address" className="delivery-label">
                        Address:
                    </label>
                    <input id="delivery-address" type="text" name="customer_address" value={this.state.customer_address} onChange={this.handleInput}/>

                    <label htmlFor="delivery-city" className="delivery-label">
                        City:
                    </label>
                    <input id="delivery-city" type="text" name="customer_city" value={this.state.customer_city} onChange={this.handleInput}/>

                    <label htmlFor="delivery-state" className="delivery-label">
                        State:
                    </label>
                    <input id="delivery-state" type="text" name="customer_state" defaultValue={this.state.customer_state}/>

                    <label htmlFor="delivery-zip-code" className="delivery-label">
                        Zip code:
                    </label>
                    <input id="delivery-zip-code" type="text" name="customer_zip_code" value={this.state.customer_zip_code} onChange={this.handleInput}/>

                    <p>{this.state.error ? this.state.error : ""}</p>

                    <button type="button" onClick={this.handleStartOrdering}>Start ordering</button>

                    <button  type="button" name="default" onClick={this.handleCancel}>Cancel</button>
                </fieldset>
            </form>
        )
    }
}