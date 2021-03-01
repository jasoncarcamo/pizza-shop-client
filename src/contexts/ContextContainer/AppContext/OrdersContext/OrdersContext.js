import React from "react";
import OrderService from "../../../../services/OrderServce/OrderServce";

const OrderContext = React.createContext({
    order: {},
    orders: {},
    startOrder: ()=>{},
    setOrder: ()=>{},
    updateOrder: ()=>{},
    deleteOrder: ()=>{}
});

export default OrderContext;

export class OrdersContextProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            order: {
                order_started: false,
                order_type: "",
                customer_first_name: "",
                customer_last_name: "",
                customer_mobile_number: "",
                customer_address: "",
                customer_city: "",
                customer_state: "",
                customer_zip_code: "",
                subtotal: "",
                time_placed: "",
                time_ready: "",
                order_items: "",
                date_created: "",
            },
            orders: {}
        };
    }

    componentDidMount(){
        const order = OrderService.getOrder();

        if(order){
            console.log(order);
            this.setOrder(order);
        }
    }

    startOrder = (order_type)=>{
        const order = this.state.order;

        order.order_started = true;
        order.order_type = order_type;

        this.setOrder(order);
    }

    setDefaultOrder = ()=>{
        this.setState({
            order: {
                order_started: false,
                order_type: "",
                customer_first_name: "",
                customer_last_name: "",
                customer_mobile_number: "",
                customer_address: "",
                customer_city: "",
                customer_state: "",
                customer_zip_code: "",
                subtotal: "",
                time_placed: "",
                time_ready: "",
                order_items: "",
                date_created: "",
            }
        });
    }

    getOrders = ()=>{

    }

    setOrder = (order)=>{

        OrderService.setOrder(order);

        this.setState({
            order
        });
    }

    updateOrder = (order)=>{
        this.setOrder(order);
    }

    deleteOrder = ()=>{
        OrderService.deleteOrder();
        this.setDefaultOrder();
    }

    render(){
        const value = {
            order: this.state.order,
            orders: this.state.orders,
            startOrder: this.startOrder,
            setOrder: this.setOrder,
            updateOrder: this.updateOrder,
            deleteOrder: this.deleteOrder
        };
        console.log(value);
        return (
            <OrderContext.Provider value={value}>
                {this.props.children}
            </OrderContext.Provider>
        );
    };
}