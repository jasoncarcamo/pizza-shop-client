
import React from "react";
import { createPortal } from "react-dom";
import AppContext from "../../../../contexts/ContextContainer/AppContext/AppContext";
import ConfirmCancel from "./ConfirmCancel/ConfirmCancel";
import ConfirmPlace from "./ConfirmPlace/ConfirmPlace";
import OrderTypeOptions from "./OrderTypeOptions/OrderTypeOptions";
import "./CheckOutOptions.css";

export default class CheckOutOptions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cancelOrder: false,
            placeOrder: false
        };
    }

    static contextType = AppContext;

    toEditCart = () => {
        this.props.history.push("/cart/edit");
    };

    toggleCancelOrder = () => {
        this.setState((previousState) => ({
            cancelOrder: !previousState.cancelOrder,
            placeOrder: false
        }));
    };

    togglePlaceOrder = () => {
        this.setState((previousState) => ({
            placeOrder: !previousState.placeOrder,
            cancelOrder: false
        }));
    };

    renderRoundedTotal = () => {
        const subtotal = Number(this.props.order.subtotal);

        if (!Number.isFinite(subtotal)) {
            return "0.00";
        }

        return subtotal.toFixed(2);
    };

    renderMobileNumber = (number) => {
        if (!number) {
            return "Not provided";
        }

        const digits = String(number).replace(/\D/g, "");

        const normalizedNumber = digits.length === 11 && digits.startsWith("1")
            ? digits.slice(1)
            : digits;

        if (normalizedNumber.length !== 10) {
            return String(number);
        }

        return `(${normalizedNumber.slice(0, 3)}) ${normalizedNumber.slice(3, 6)}-${normalizedNumber.slice(6)}`;
    };

    displayAddress = () => {
        const order = this.props.order;

        if (order.order_type !== "Delivery") {
            return null;
        }

        const address = [
            order.customer_address,
            order.customer_city,
            order.customer_state,
            order.customer_zip_code
        ].filter(Boolean).join(", ");

        return (
            <div className="checkout-options-info-row">
                <div
                    className="checkout-options-info-icon"
                    aria-hidden="true"
                >
                    <svg
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                        <circle cx="12" cy="10" r="2.5" />
                    </svg>
                </div>

                <div className="checkout-options-info-content">
                    <span className="checkout-options-info-label">
                        Delivery address
                    </span>

                    <span className="checkout-options-info-value">
                        {address || "Not provided"}
                    </span>
                </div>
            </div>
        );
    };

    render() {
        const { order, history } = this.props;
        const { cancelOrder, placeOrder } = this.state;

        const customerName = [
            order.customer_first_name,
            order.customer_last_name
        ].filter(Boolean).join(" ") || "Not provided";

        return (
            <section className="checkout-options">
                <div className="checkout-options-customer-card">
                    <div className="checkout-options-section-heading">
                        <div>
                            <span className="checkout-options-eyebrow">
                                CONTACT INFORMATION
                            </span>

                            <h3>Customer Details</h3>
                        </div>

                        <span className="checkout-options-verified">
                            Order Review
                        </span>
                    </div>

                    <div className="checkout-options-info-list">
                        <div className="checkout-options-info-row">
                            <div
                                className="checkout-options-info-icon"
                                aria-hidden="true"
                            >
                                <svg
                                    width="19"
                                    height="19"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="8" r="4" />
                                    <path d="M4 21v-2a8 8 0 0 1 16 0v2" />
                                </svg>
                            </div>

                            <div className="checkout-options-info-content">
                                <span className="checkout-options-info-label">
                                    Full name
                                </span>

                                <span className="checkout-options-info-value">
                                    {customerName}
                                </span>
                            </div>
                        </div>

                        <div className="checkout-options-info-row">
                            <div
                                className="checkout-options-info-icon"
                                aria-hidden="true"
                            >
                                <svg
                                    width="19"
                                    height="19"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect
                                        x="6"
                                        y="2"
                                        width="12"
                                        height="20"
                                        rx="2"
                                    />
                                    <path d="M11 18h2" />
                                </svg>
                            </div>

                            <div className="checkout-options-info-content">
                                <span className="checkout-options-info-label">
                                    Mobile number
                                </span>

                                <span className="checkout-options-info-value">
                                    {this.renderMobileNumber(order.customer_mobile_number)}
                                </span>
                            </div>
                        </div>

                        {this.displayAddress()}
                    </div>
                </div>

                <div className="checkout-options-order-type">
                    <div className="checkout-options-section-heading">
                        <div>
                            <span className="checkout-options-eyebrow">
                                ORDER PREFERENCES
                            </span>

                            <h3>
                                {order.order_type === "Delivery"
                                    ? "Delivery Details"
                                    : "Pickup Details"}
                            </h3>
                        </div>
                    </div>

                    <OrderTypeOptions order={order} />
                </div>

                <div className="checkout-options-actions">
                    <div className="checkout-options-total">
                        <div>
                            <span className="checkout-options-total-label">
                                Order Subtotal
                            </span>

                            <small>
                                Before applicable taxes and fees
                            </small>
                        </div>

                        <strong>
                            ${this.renderRoundedTotal()}
                        </strong>
                    </div>

                    <button
                        type="button"
                        className="checkout-options-place-order"
                        onClick={this.togglePlaceOrder}
                        aria-haspopup="dialog"
                        aria-expanded={placeOrder}
                    >
                        <span>Place Order</span>

                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </button>

                    <div className="checkout-options-secondary-actions">
                        <button
                            type="button"
                            className="checkout-options-edit-button"
                            onClick={this.toEditCart}
                        >
                            Edit Cart
                        </button>

                        <button
                            type="button"
                            className="checkout-options-cancel-button"
                            onClick={this.toggleCancelOrder}
                            aria-haspopup="dialog"
                            aria-expanded={cancelOrder}
                        >
                            Cancel Order
                        </button>
                    </div>

                    <p className="checkout-options-note">
                        Please review your information before placing
                        your order.
                    </p>
                </div>

                {cancelOrder && createPortal(
                    <ConfirmCancel
                        toggleCancelOrder={this.toggleCancelOrder}
                    />,
                    document.body
                )}

                {placeOrder && createPortal(
                    <ConfirmPlace
                        order={order}
                        togglePlaceOrder={this.togglePlaceOrder}
                        history={history}
                    />,
                    document.body
                )}
            </section>
        );
    }
}
