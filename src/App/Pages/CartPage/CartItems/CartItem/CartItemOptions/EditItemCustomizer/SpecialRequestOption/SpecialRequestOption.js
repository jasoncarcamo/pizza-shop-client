import React from "react";

export default class SpecialRequestOption extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            special_request: ""
        }
    }

    handleSpecialRequest = (e)=>{
        const orderItem = this.props.orderItem;

        orderItem.special_request = e.target.value;
        
        this.setState({
            special_request: orderItem.special_request
        });

        this.updateOrderItem(orderItem);
    }

    updateOrderItem = (orderItem)=>{
        this.props.updateOrderItem(orderItem);
    }

    render(){
        return (
            <section>
                <label htmlFor="special-request-label">Special requests?</label>
                <input type="textarea" id="" value={this.props.orderItem.special_request} onChange={this.handleSpecialRequest}/>
            </section>
        );
    };
}