
import React from "react";
import AppContext from "../../../../contexts/ContextContainer/AppContext/AppContext";
import OrderItem from "./OrderItem/OrderItem";
import "./OrderItems.css";

export default class OrderItems extends React.Component {
    static contextType = AppContext;

    renderOrderItems = (cart) => {
        return cart.map((orderItem, index) => {
            const key = orderItem.cart_id ||
                orderItem.cartId ||
                `${orderItem.id}-${index}`;

            return (
                <li
                    key={key}
                    className="order-item-list-item"
                >
                    <OrderItem orderItem={orderItem} />
                </li>
            );
        });
    };

    render() {
        const cartContext = this.context && this.context.cartContext;
        const cart = cartContext && Array.isArray(cartContext.cart)
            ? cartContext.cart
            : [];

        const totalQuantity = cart.reduce((total, item) => {
            return total + (Number(item.quantity) || 0);
        }, 0);

        return (
            <section
                className="checkout-order-items"
                aria-labelledby="checkout-order-items-title"
            >
                <div className="checkout-order-items-header">
                    <div>
                        <span className="checkout-order-items-eyebrow">
                            YOUR SELECTION
                        </span>

                        <h3 id="checkout-order-items-title">
                            Order Summary
                        </h3>
                    </div>

                    <span className="checkout-order-items-count">
                        {totalQuantity} {totalQuantity === 1 ? "item" : "items"}
                    </span>
                </div>

                {cart.length > 0 ? (
                    <ul id="order-item-list">
                        {this.renderOrderItems(cart)}
                    </ul>
                ) : (
                    <p className="checkout-order-items-empty">
                        Your cart is currently empty.
                    </p>
                )}
            </section>
        );
    }
}
