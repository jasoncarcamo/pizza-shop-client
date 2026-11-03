
import React from "react";
import "./OrderItem.css";

export default class OrderItem extends React.Component {
    formatPrice = (price) => {
        const amount = Number(price);

        if (!Number.isFinite(amount)) {
            return "$0.00";
        }

        return amount.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });
    };

    formatSize = (size) => {
        if (!size || typeof size !== "string") {
            return null;
        }

        const formattedSize = size.includes("_")
            ? size.split("_").slice(1).join("_")
            : size;

        return formattedSize.replace(/_/g, " ");
    };

    render() {
        const orderItem = this.props.orderItem || {};

        const {
            name,
            quantity,
            price,
            size,
            special_request
        } = orderItem;

        const itemQuantity = Math.max(1, Number(quantity) || 1);
        const unitPrice = Number(price) || 0;
        const totalPrice = unitPrice * itemQuantity;
        const formattedSize = this.formatSize(size);

        return (
            <article className="order-item-section">
                <div className="order-item-main">
                    <div className="order-item-quantity">
                        <span>{itemQuantity}</span>
                        <small>×</small>
                    </div>

                    <div className="order-item-details">
                        <h4 className="order-item-name">
                            {name || "Menu Item"}
                        </h4>

                        <div className="order-item-meta">
                            {formattedSize && (
                                <span className="order-item-size">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        <circle cx="12" cy="12" r="9" />
                                        <circle cx="12" cy="12" r="4" />
                                    </svg>

                                    {formattedSize}
                                </span>
                            )}

                            <span className="order-item-unit-price">
                                {this.formatPrice(unitPrice)} each
                            </span>
                        </div>

                        {special_request && String(special_request).trim() && (
                            <div className="order-item-special-request">
                                <span className="order-item-special-label">
                                    Special Request
                                </span>

                                <p>{special_request}</p>
                            </div>
                        )}
                    </div>

                    <div className="order-item-price">
                        {this.formatPrice(totalPrice)}
                    </div>
                </div>
            </article>
        );
    }
}
