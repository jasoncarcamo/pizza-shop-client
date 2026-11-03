
import React from "react";
import AppContext from "../../../contexts/ContextContainer/AppContext/AppContext";
import PickUpOptions from "./PickUpOptions/PickUpOptions";
import DeliveryOptions from "./DeliveryOptions/DeliveryOptions";
import "./Order.css";

export default class Order extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            order_type: "default"
        };
    }

    static contextType = AppContext;

    startOrder = (event) => {
        const orderType = event.currentTarget.name;

        this.setState({
            order_type: orderType
        });
    };

    setDefaultOrderType = () => {
        this.setState({
            order_type: "default"
        });
    };

    renderOrderOptions = () => {
        return (
            <div className="order-selection-container">
                <div className="order-selection-heading">
                    <span className="order-eyebrow">
                        THE PIZZA SPOT
                    </span>

                    <h1 id="order-page-title">
                        How would you like
                        <em> your pizza?</em>
                    </h1>

                    <p>
                        Choose how you'd like to receive your order,
                        and we'll help you get started.
                    </p>
                </div>

                <div
                    id="order-type-options"
                    role="group"
                    aria-label="Choose your order type"
                >
                    <button
                        type="button"
                        name="Pick up"
                        className="order-type-card"
                        onClick={this.startOrder}
                    >
                        <span className="order-card-top">
                            <span className="order-card-number">
                                01 / PICKUP
                            </span>

                            <span
                                className="order-card-arrow"
                                aria-hidden="true"
                            >
                                ↗
                            </span>
                        </span>

                        <span className="order-card-icon" aria-hidden="true">
                            <svg
                                viewBox="0 0 64 64"
                                width="60"
                                height="60"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M10 26h44l-5 25H15L10 26Z" />
                                <path d="M18 26V14h28v12" />
                                <path d="M22 14c0-6 4-10 10-10s10 4 10 10" />
                                <path d="M23 37h18" />
                                <path d="M25 43h14" />
                            </svg>
                        </span>

                        <span className="order-card-content">
                            <strong>Pick Up</strong>

                            <span className="order-card-description">
                                Place your order and collect it at
                                the restaurant.
                            </span>

                            <span className="order-card-action">
                                Choose Pickup
                                <span aria-hidden="true">→</span>
                            </span>
                        </span>
                    </button>

                    <button
                        type="button"
                        name="Delivery"
                        className="order-type-card"
                        onClick={this.startOrder}
                    >
                        <span className="order-card-top">
                            <span className="order-card-number">
                                02 / DELIVERY
                            </span>

                            <span
                                className="order-card-arrow"
                                aria-hidden="true"
                            >
                                ↗
                            </span>
                        </span>

                        <span className="order-card-icon" aria-hidden="true">
                            <svg
                                viewBox="0 0 64 64"
                                width="60"
                                height="60"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 19h34v26H5V19Z" />
                                <path d="M39 27h10l10 11v7H39V27Z" />
                                <path d="M49 27v11h10" />
                                <circle cx="17" cy="47" r="6" />
                                <circle cx="49" cy="47" r="6" />
                                <path d="M12 12h20" />
                                <path d="M17 7h10" />
                            </svg>
                        </span>

                        <span className="order-card-content">
                            <strong>Delivery</strong>

                            <span className="order-card-description">
                                Have your favorites brought
                                straight to your door.
                            </span>

                            <span className="order-card-action">
                                Choose Delivery
                                <span aria-hidden="true">→</span>
                            </span>
                        </span>
                    </button>
                </div>

                <p className="order-selection-footer">
                    GOOD FOOD. YOUR WAY.
                </p>
            </div>
        );
    };

    render() {
        const { order_type } = this.state;

        return (
            <main
                id="order-type-section"
                className={
                    order_type !== "default"
                        ? "order-type-section--active"
                        : ""
                }
            >
                {order_type === "default" &&
                    this.renderOrderOptions()
                }

                {order_type === "Pick up" && (
                    <PickUpOptions
                        setDefaultOrderType={this.setDefaultOrderType}
                        history={this.props.history}
                        startOrder={this.startOrder}
                    />
                )}

                {order_type === "Delivery" && (
                    <DeliveryOptions
                        setDefaultOrderType={this.setDefaultOrderType}
                        history={this.props.history}
                        startOrder={this.startOrder}
                    />
                )}
            </main>
        );
    }
}
