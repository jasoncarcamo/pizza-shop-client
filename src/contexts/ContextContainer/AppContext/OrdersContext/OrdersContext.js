
import React from "react";
import OrderService from "../../../../services/OrderServce/OrderServce";

const createDefaultOrder = () => ({
    order_started: false,
    order_type: "",
    customer_first_name: "",
    customer_last_name: "",
    customer_mobile_number: "",
    customer_address: "",
    customer_city: "",
    customer_state: "",
    customer_zip_code: "",
    subtotal: 0,
    time_placed: "",
    time_ready: "",
    order_items: [],
    customer_id: 0,
    date_created: ""
});

const OrderContext = React.createContext({
    order: createDefaultOrder(),
    orders: {},
    setDefaultOrder: () => {},
    startOrder: () => {},
    setOrder: () => {},
    updateOrder: () => {},
    deleteOrder: () => {},
    cancelOrder: () => {}
});

export default OrderContext;

export class OrdersContextProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            order: createDefaultOrder(),
            orders: {}
        };
    }

    componentDidMount() {
        const savedOrder = OrderService.getOrder();

        if (
            savedOrder &&
            typeof savedOrder === "object" &&
            !Array.isArray(savedOrder)
        ) {
            this.setState((previousState) => ({
                order: {
                    ...previousState.order,
                    ...savedOrder
                }
            }));
        }
    }

    startOrder = (orderType) => {

        this.setState({
            order_started: true,
            order_type: orderType
        });
    };

    setDefaultOrder = () => {
        OrderService.deleteOrder();

        this.setState({
            order: createDefaultOrder()
        });
    };

    getOrders = () => {
        return this.state.orders;
    };

    setOrder = (order) => {
        if (
            !order ||
            typeof order !== "object" ||
            Array.isArray(order)
        ) {
            return;
        }

        const updatedOrder = {
            ...createDefaultOrder(),
            ...order
        };

        OrderService.setOrder(updatedOrder);

        this.setState({
            order: updatedOrder
        });
    };

    updateOrder = (updates) => {
        if (
            !updates ||
            typeof updates !== "object" ||
            Array.isArray(updates)
        ) {
            return;
        }
        
        this.setState((previousState) => {
            const updatedOrder = {
                ...previousState.order,
                ...updates
            };

            OrderService.setOrder(updatedOrder);

            return {
                order: updatedOrder
            };
        });
    };

    deleteOrder = () => {
        this.setDefaultOrder();
    };

    cancelOrder = () => {
        this.setDefaultOrder();
    };

    render() {
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

        return (
            <OrderContext.Provider value={value}>
                {this.props.children}
            </OrderContext.Provider>
        );
    }
}
