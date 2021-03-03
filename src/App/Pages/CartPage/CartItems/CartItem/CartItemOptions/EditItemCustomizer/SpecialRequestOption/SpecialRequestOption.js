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
            <section className="special-request-section">
                <label className="special-request-label" htmlFor="special-request-input"><strong>Special requests?</strong></label>
                <textarea className="special-request-input" type="textarea" id="special-request-input" value={this.state.special_request} onChange={this.handleSpecialRequest} placeholder="Comments?"></textarea>
            </section>
        );
    };
}