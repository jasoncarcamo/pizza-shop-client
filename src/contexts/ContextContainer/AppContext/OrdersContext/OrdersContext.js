import React from "react";
import OrderService from "../../../../services/OrderServce/OrderServce";

const OrderContext = React.createContext({
    order: {},
    orders: {},
    setDefaultOrder: ()=>{},
    startOrder: ()=>{},
    setOrder: ()=>{},
    updateOrder: ()=>{},
    deleteOrder: ()=>{},
    cancelOrder: ()=>{}
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
                customer_id: 0,
                date_created: "",
            },
            orders: {}
        };
    }

    componentDidMount(){
        const order = OrderService.getOrder();

        if(order){
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
        const order = this.state.order;

        order.order_started = false;
        order.order_type = "default";
        order.order_items =  [];

        OrderService.deleteOrder();

        this.setState({
            order
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

    cancelOrder = ()=>{
        const order = this.state.order;

        order.order_started = false;
        order.order_type = "default";

        OrderService.deleteOrder();

        this.setState({
            order
        });
    }

    render(){
        const value = {
            order: this.state.order,
            orders: this.state.orders,
            startOrder: this.startOrder,
            setDefaultOrder: this.setDefaultOrder,
            setOrder: this.setOrder,
            updateOrder: this.updateOrder,
            deleteOrder: this.deleteOrder,
            cancelOrder: this.cancelOrder
        };
        console.log(value.order)
        return (
            <OrderContext.Provider value={value}>
                {this.props.children}
            </OrderContext.Provider>
        );
    };
}