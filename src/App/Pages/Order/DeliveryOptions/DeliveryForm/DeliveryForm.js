import React from "react";
import AppContext from "../../../../../contexts/ContextContainer/AppContext/AppContext";
import "./DeliveryForm.css";

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

    componentDidMount(){
        const order = this.context.ordersContext.order;

        this.setState({
            customer_first_name: order.customer_first_name,
            customer_last_name: order.customer_last_name,
            customer_mobile_number: order.customer_mobile_number,
            customer_address: order.customer_address,
            customer_city: order.customer_city,
            customer_state: order.customer_state,
            customer_zip_code: order.customer_zip_code
        });
    }

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

    toggleDefaultOrderype = ()=>{
        this.props.setDefaultOrderType();
    }

    updateOrder = (e)=>{
        const order = this.context.ordersContext.order;

        order[e.target.name] = e.target.value;

        this.context.ordersContext.updateOrder(order);
    }

    handleStartOrdering = (e)=>{
        const error = this.checkRequirements();

        if(error){
            this.setState({
                error
            });

            return;
        };

        this.context.ordersContext.startOrder(e.target.name);

        this.props.history.push("/menu/pizza");
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
            <form id="delivery-form">
                <fieldset id="delivery-fieldset">

                    <label htmlFor="delivery-first-name" className="delivery-label">
                        First name:
                    </label>
                    <input id="delivery-first-name" className="delivery-input" type="text" name="customer_first_name" value={this.state.customer_first_name} onChange={this.handleInput}/>

                    <label htmlFor="delivery-last-name" className="delivery-label">
                        Last name:
                    </label>
                    <input id="delivery-last-name" className="delivery-input" type="text" name="customer_last_name" value={this.state.customer_last_name} onChange={this.handleInput}/>

                    <label htmlFor="delivery-mobile-number" className="delivery-label">
                        Mobile number:
                    </label>
                    <input id="delivery-mobile-number" className="delivery-input" type="text" name="customer_mobile_number" value={this.state.customer_mobile_number} onChange={this.handleInput}/>

                    <label htmlFor="delivery-address" className="delivery-label">
                        Address:
                    </label>
                    <input id="delivery-address" className="delivery-input" type="text" name="customer_address" value={this.state.customer_address || ""} onChange={this.handleInput}/>

                    <label htmlFor="delivery-city" className="delivery-label">
                        City:
                    </label>
                    <input id="delivery-city" className="delivery-input" type="text" name="customer_city" value={this.state.customer_city || ""} onChange={this.handleInput}/>

                    <label htmlFor="delivery-state" className="delivery-label">
                        State:
                    </label>
                    <input id="delivery-state" className="delivery-input" type="text" name="customer_state" onChange={this.handleInput} defaultValue={this.state.customer_state}/>

                    <label htmlFor="delivery-zip-code" className="delivery-label">
                        Zip code:
                    </label>
                    <input id="delivery-zip-code" className="delivery-input" type="text" name="customer_zip_code" value={this.state.customer_zip_code || ""} onChange={this.handleInput}/>

                    <p>{this.state.error ? this.state.error : ""}</p>

                    <button className="delivery-btn" type="button" name="Delivery" onClick={this.handleStartOrdering}>Start ordering</button>

                    <button className="delivery-btn"  type="button" name="default" onClick={this.handleCancel}>Cancel</button>
                </fieldset>
            </form>
        )
    }
}