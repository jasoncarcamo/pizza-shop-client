
import React from "react";
import OrderRequest from "../../../../../services/FetchRequests/OrderRequest";
import AppContext from "../../../../../contexts/ContextContainer/AppContext/AppContext";
import CustomerTokenService from "../../../../../services/CustomerTokenService/CustomerTokenService";
import OrderPlacedMessage from "./OrderPlacedMessage/OrderPlacedMessage";
import "./ConfirmPlace.css";

export default class ConfirmPlace extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            orderPlaced: false,
            error: ""
        };
    }

    static contextType = AppContext;

    togglePlaceOrder = () => {
        if (this.state.loading || this.state.orderPlaced) {
            return;
        }

        this.props.togglePlaceOrder();
    };

    calculateSubtotal = (cart) => {
        const subtotal = cart.reduce((total, item) => {
            const price = Number(item.price) || 0;
            const quantity = Number(item.quantity) || 1;

            return total + (price * quantity);
        }, 0);

        return Number(subtotal.toFixed(2));
    };

    validateOrder = (order, cart) => {
        if (!Array.isArray(cart) || cart.length === 0) {
            return "Your cart is empty. Please add items before placing an order.";
        }

        if (!order.order_type) {
            return "Please select pickup or delivery.";
        }

        if (
            order.order_type === "Delivery" &&
            (
                !order.customer_address ||
                !order.customer_city ||
                !order.customer_state ||
                !order.customer_zip_code
            )
        ) {
            return "Please provide a complete delivery address.";
        }

        if (order.time_placed === "Later") {
            return "Please select a date and time for your scheduled order.";
        }

        if (order.time_placed) {
            const scheduledDate = new Date(order.time_placed);

            if (Number.isNaN(scheduledDate.getTime())) {
                return "Please select a valid order date and time.";
            }
        }

        return "";
    };

    placeOrder = () => {
        if (this.state.loading || this.state.orderPlaced) {
            return;
        }

        const cart = this.context.cartContext.cart || [];
        const contextOrder = this.context.ordersContext.order || {};
        const token = CustomerTokenService.getToken();

        const order = {
            ...this.props.order,
            ...contextOrder
        };

        const validationError = this.validateOrder(order, cart);

        if (validationError) {
            this.setState({
                error: validationError
            });

            return;
        }

        const customer = this.context.customerContext.customer || {};
        const now = new Date();

        const orderToSubmit = {
            ...order,
            order_items: cart.map((item) => ({
                ...item
            })),
            subtotal: this.calculateSubtotal(cart),
            customer_id: customer.id || 0,
            time_placed: order.time_placed || now.toISOString(),
            date_created: now.toISOString()
        };

        this.setState({
            loading: false,
            orderPlaced: true,
            error: ""
        });
    };

    renderOptions = () => {
        return (
            <div id="confirm-order-options">
                <button
                    type="button"
                    className="confirm-order-submit"
                    onClick={this.placeOrder}
                    disabled={this.state.loading}
                >
                    Yes, Place Order
                </button>

                <button
                    type="button"
                    className="confirm-order-cancel"
                    onClick={this.togglePlaceOrder}
                    disabled={this.state.loading}
                >
                    Go Back
                </button>
            </div>
        );
    };

    render() {
        const {
            loading,
            orderPlaced,
            error
        } = this.state;

        if (orderPlaced) {
            return (
                <div className="confirm-order-overlay">
                    <section
                        id="confirm-order-section"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Order placed successfully"
                    >
                        <OrderPlacedMessage history={this.props.history} />
                    </section>
                </div>
            );
        }

        return (
            <div className="confirm-order-overlay">
                <section
                    id="confirm-order-section"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="confirm-order-title"
                    aria-describedby="confirm-order-description"
                    aria-busy={loading}
                >
                    <div
                        className="confirm-order-icon"
                        aria-hidden="true"
                    >
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M4 12l5 5L20 6" />
                        </svg>
                    </div>

                    <span className="confirm-order-eyebrow">
                        ONE LAST STEP
                    </span>

                    <h2 id="confirm-order-title">
                        Ready to Place Your Order?
                    </h2>

                    <p id="confirm-order-description">
                        Please confirm that you're ready to send
                        your order to The Pizza Spot.
                    </p>

                    {error && (
                        <div
                            className="confirm-order-error"
                            role="alert"
                        >
                            {error}
                        </div>
                    )}

                    {loading ? (
                        <div
                            className="confirm-order-loading"
                            role="status"
                        >
                            <span className="confirm-order-spinner"></span>
                            Placing your order...
                        </div>
                    ) : (
                        this.renderOptions()
                    )}

                    <p className="confirm-order-note">
                        Your order will be sent to the restaurant
                        for processing.
                    </p>
                </section>
            </div>
        );
    }
}
