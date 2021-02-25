import React from "react";
import OrderRequest from "../../services/FetchRequests/OrderRequest";

const OrderContext = React.createContext({
    orders: {}
});

export default OrderContext;

export class OrdersContextProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            orders: {}
        };
    }

    getOrders = ()=>{

    }

    setOrder = ()=>{

    }

    updateOrder = ()=>{

    }

    deleteOrder = ()=>{

    }

    render(){
        const value = {
            orders: this.state.orders
        };

        return (
            <OrderContext.Provider value={value}>
                {this.props.children}
            </OrderContext.Provider>
        );
    };
}