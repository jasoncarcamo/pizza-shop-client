
import React from "react";
import AppContext from "../../../../../contexts/ContextContainer/AppContext/AppContext";
import "./OrderTypeOptions.css";
import DeliveryAddressForm from "./DeliverAddressForm/DeliveryAddressForm";

export default class OrderTypeOptions extends React.Component {
    static contextType = AppContext;

    getLocalDateTime = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");

        return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    getMinimumDateTime = () => {
        return this.getLocalDateTime(new Date());
    };

    getScheduledDateTime = () => {
        const { time_placed } = this.context.ordersContext.order;

        if (!time_placed || time_placed === "Later") {
            return "";
        }

        const date = new Date(time_placed);

        if (Number.isNaN(date.getTime())) {
            return "";
        }

        if (date <= new Date()) {
            return "";
        }

        return this.getLocalDateTime(date);
    };

    isScheduledForLater = () => {
        const { time_placed } = this.context.ordersContext.order;

        if (time_placed === "Later") {
            return true;
        }

        if (!time_placed) {
            return false;
        }

        const date = new Date(time_placed);

        return !Number.isNaN(date.getTime()) && date > new Date();
    };

    updateOrder = (updatedOrder) => {
        this.context.ordersContext.updateOrder(updatedOrder);
    };

    handleOrderType = (event) => {
        const orderType = event.target.value;

        this.updateOrder({
            order_type: orderType
        });
    };

    handleOrderTimeType = (event) => {
        const timeType = event.target.value;

        if (timeType === "ASAP") {
            this.updateOrder({
                time_placed: new Date().toISOString()
            });

            return;
        }

        this.updateOrder({
            time_placed: "Later"
        });
    };

    handleLaterTime = (event) => {
        const selectedValue = event.target.value;

        if (!selectedValue) {
            this.updateOrder({
                time_placed: "Later"
            });

            return;
        }

        const selectedDate = new Date(selectedValue);

        if (
            Number.isNaN(selectedDate.getTime()) ||
            selectedDate <= new Date()
        ) {
            return;
        }

        this.updateOrder({
            time_placed: selectedDate.toISOString()
        });
    };

    renderDateTime = () => {
        return (
            <div className="checkout-order-schedule">
                <label htmlFor="checkout-scheduled-time">
                    Choose your preferred date and time
                </label>

                <input
                    id="checkout-scheduled-time"
                    type="datetime-local"
                    name="scheduled_time"
                    value={this.getScheduledDateTime()}
                    onChange={this.handleLaterTime}
                    min={this.getMinimumDateTime()}
                    required
                />

                <p className="checkout-order-schedule-note">
                    Please select a future date and time.
                    Availability will be confirmed by the restaurant.
                </p>
            </div>
        );
    };

    render() {
        const  order = this.context.ordersContext.order || this.props;

        const isPickup = order.order_type === "Pick up" ||
            order.order_type === "Pick Up";

        const isDelivery = order.order_type === "Delivery";

        const isLater = this.isScheduledForLater();

        return (
            <section id="checkout-order-type-section">
                <div className="checkout-order-group">
                    <div className="checkout-order-group-heading">
                        <span className="checkout-order-step">
                            01
                        </span>

                        <div>
                            <h4>How would you like your order?</h4>

                            <p>
                                Choose pickup or delivery.
                            </p>
                        </div>
                    </div>

                    <fieldset
                        id="checkout-order-type-fieldset"
                        className="checkout-order-choice-grid"
                    >
                        <legend className="checkout-order-sr-only">
                            Order fulfillment method
                        </legend>

                        <label
                            htmlFor="checkout-order-pickup"
                            className={`checkout-order-choice ${isPickup ? "checkout-order-choice-selected" : ""}`}
                        >
                            <input
                                id="checkout-order-pickup"
                                type="radio"
                                name="order_type"
                                value="Pick up"
                                checked={isPickup}
                                onChange={this.handleOrderType}
                            />

                            <span className="checkout-order-choice-icon" aria-hidden="true">
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M3 10h18l-2 10H5L3 10Z" />
                                    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                                </svg>
                            </span>

                            <span className="checkout-order-choice-content">
                                <strong>Pickup</strong>
                                <small>Collect at the restaurant</small>
                            </span>

                            <span className="checkout-order-choice-indicator" aria-hidden="true"></span>
                        </label>

                        <label
                            htmlFor="checkout-order-delivery"
                            className={`checkout-order-choice ${isDelivery ? "checkout-order-choice-selected" : ""}`}
                        >
                            <input
                                id="checkout-order-delivery"
                                type="radio"
                                name="order_type"
                                value="Delivery"
                                checked={isDelivery}
                                onChange={this.handleOrderType}
                            />

                            <span className="checkout-order-choice-icon" aria-hidden="true">
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M3 7h11v10H3z" />
                                    <path d="M14 10h4l3 3v4h-7" />
                                    <circle cx="7" cy="18" r="2" />
                                    <circle cx="18" cy="18" r="2" />
                                </svg>
                            </span>

                            <span className="checkout-order-choice-content">
                                <strong>Delivery</strong>
                                <small>Delivered to your address</small>
                            </span>

                            <span className="checkout-order-choice-indicator" aria-hidden="true"></span>
                        </label>
                    </fieldset>

                    <DeliveryAddressForm
                        order={order}
                        visible={isDelivery}
                        updateOrder={this.updateOrder}
                    />
                </div>

                <div className="checkout-order-group">
                    <div className="checkout-order-group-heading">
                        <span className="checkout-order-step">
                            02
                        </span>

                        <div>
                            <h4>When would you like it?</h4>

                            <p>
                                Order as soon as possible or schedule ahead.
                            </p>
                        </div>
                    </div>

                    <fieldset
                        id="checkout-order-time-fieldset"
                        className="checkout-order-choice-grid"
                    >
                        <legend className="checkout-order-sr-only">
                            Order timing
                        </legend>

                        <label
                            htmlFor="checkout-order-asap"
                            className={`checkout-order-choice ${!isLater ? "checkout-order-choice-selected" : ""}`}
                        >
                            <input
                                id="checkout-order-asap"
                                type="radio"
                                name="time_placed_type"
                                value="ASAP"
                                checked={!isLater}
                                onChange={this.handleOrderTimeType}
                            />

                            <span className="checkout-order-choice-icon" aria-hidden="true">
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="9" />
                                    <path d="M12 7v5l3 2" />
                                </svg>
                            </span>

                            <span className="checkout-order-choice-content">
                                <strong>ASAP</strong>
                                <small>Prepare as soon as possible</small>
                            </span>

                            <span className="checkout-order-choice-indicator" aria-hidden="true"></span>
                        </label>

                        <label
                            htmlFor="checkout-order-later"
                            className={`checkout-order-choice ${isLater ? "checkout-order-choice-selected" : ""}`}
                        >
                            <input
                                id="checkout-order-later"
                                type="radio"
                                name="time_placed_type"
                                value="Later"
                                checked={isLater}
                                onChange={this.handleOrderTimeType}
                            />

                            <span className="checkout-order-choice-icon" aria-hidden="true">
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="3" y="5" width="18" height="16" rx="2" />
                                    <path d="M7 3v4M17 3v4M3 10h18" />
                                    <path d="M8 15h3" />
                                </svg>
                            </span>

                            <span className="checkout-order-choice-content">
                                <strong>Schedule for Later</strong>
                                <small>Choose a date and time</small>
                            </span>

                            <span className="checkout-order-choice-indicator" aria-hidden="true"></span>
                        </label>
                    </fieldset>

                    {isLater && this.renderDateTime()}
                </div>
            </section>
        );
    }
}
