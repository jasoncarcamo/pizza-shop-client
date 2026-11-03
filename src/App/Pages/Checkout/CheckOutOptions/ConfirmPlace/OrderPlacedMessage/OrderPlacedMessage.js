
import React from "react";
import AppContext from "../../../../../../contexts/ContextContainer/AppContext/AppContext";
import "./OrderPlacedMessage.css";

export default class OrderPlacedMessage extends React.Component {
    static contextType = AppContext;

    setOrderDefault = () => {
        this.context.ordersContext.setDefaultOrder();
        this.context.cartContext.setDefault();

        this.props.history.replace("/menu/pizza");
    };

    render() {
        return (
            <section
                id="order-placed-section"
                aria-labelledby="order-placed-title"
            >
                <div
                    className="order-placed-success-icon"
                    aria-hidden="true"
                >
                    <svg
                        width="42"
                        height="42"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12.5l4.5 4.5L19 7" />
                    </svg>
                </div>

                <span className="order-placed-eyebrow">
                    THE PIZZA SPOT
                </span>

                <h2 id="order-placed-title">
                    Order Placed!
                </h2>

                <p className="order-placed-description">
                    Thank you for ordering with us!
                    Your order has been successfully submitted
                    to The Pizza Spot.
                </p>

                <div className="order-placed-message">
                    <span aria-hidden="true">✦</span>

                    <p>
                        Made fresh, prepared with care,
                        and served with love.
                    </p>

                    <span aria-hidden="true">✦</span>
                </div>

                <button
                    type="button"
                    className="order-placed-continue"
                    onClick={this.setOrderDefault}
                >
                    <span>Back to Menu</span>

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

                <p className="order-placed-footer">
                    We appreciate your support!
                </p>
            </section>
        );
    }
}
