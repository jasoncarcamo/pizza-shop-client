
import React from "react";
import AppContext from "../../../../contexts/ContextContainer/AppContext/AppContext";
import CartItem from "./CartItem/CartItem";
import NoItemsMessage from "./NoItemsMessage/NoItemsMessage";
import "./CartItems.css";

export default class CartItems extends React.Component {
    static contextType = AppContext;

    getCartTotals = (cart) => {
        return cart.reduce((totals, item) => {
            const quantity = Number(item.quantity) || 1;
            const price = Number(item.price) || 0;

            totals.quantity += quantity;
            totals.subtotal += price * quantity;

            return totals;
        }, {
            quantity: 0,
            subtotal: 0
        });
    };

    formatCurrency = (amount) => {
        return `$${amount.toFixed(2)}`;
    };

    toCheckout = () => {
        this.props.history.push("/cart/checkout");
    };

    renderCartItems = (cart) => {
        return cart.map((cartItem, index) => (
            <CartItem
                key={cartItem.cartId || `${cartItem.id}-${index}`}
                index={index}
                cartItem={cartItem}
            />
        ));
    };

    render() {
        const cart = this.context.cartContext.cart || [];

        if (cart.length === 0) {
            return (
                <div className="cart-items-empty">
                    <NoItemsMessage history={this.props.history} />
                </div>
            );
        }

        const { quantity, subtotal } = this.getCartTotals(cart);

        return (
            <div className="cart-items-layout">
                <section
                    className="cart-items-list-section"
                    aria-labelledby="cart-items-heading"
                >
                    <div className="cart-items-list-heading">
                        <div>
                            <span className="cart-items-eyebrow">
                                YOUR SELECTION
                            </span>

                            <h2 id="cart-items-heading">
                                Order Items
                            </h2>
                        </div>

                        <span className="cart-items-count">
                            {quantity} {quantity === 1 ? "item" : "items"}
                        </span>
                    </div>

                    <div className="cart-items-list">
                        {this.renderCartItems(cart)}
                    </div>
                </section>

                <aside
                    className="cart-items-summary"
                    aria-labelledby="cart-summary-heading"
                >
                    <div className="cart-items-summary-card">
                        <div className="cart-items-summary-header">
                            <span className="cart-items-eyebrow">
                                ALMOST THERE
                            </span>

                            <h2 id="cart-summary-heading">
                                Order Summary
                            </h2>

                            <p>
                                Freshly prepared and made with care.
                            </p>
                        </div>

                        <div className="cart-items-summary-details">
                            <div className="cart-items-summary-row">
                                <span>
                                    Items ({quantity})
                                </span>

                                <strong>
                                    {this.formatCurrency(subtotal)}
                                </strong>
                            </div>

                            <div className="cart-items-summary-row">
                                <span>
                                    Taxes &amp; fees
                                </span>

                                <span className="cart-items-summary-muted">
                                    Calculated at checkout
                                </span>
                            </div>

                            <div className="cart-items-summary-row">
                                <span>
                                    Delivery
                                </span>

                                <span className="cart-items-summary-muted">
                                    Calculated at checkout
                                </span>
                            </div>
                        </div>

                        <div className="cart-items-summary-total">
                            <div>
                                <span>Subtotal</span>
                                <small>Before taxes and fees</small>
                            </div>

                            <strong>
                                {this.formatCurrency(subtotal)}
                            </strong>
                        </div>

                        <button
                            type="button"
                            className="cart-items-checkout-button checkout-btn"
                            onClick={this.toCheckout}
                        >
                            <span>
                                Continue to Checkout
                            </span>

                            <svg
                                width="19"
                                height="19"
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

                        <p className="cart-items-checkout-note">
                            Review your order details before placing
                            your order.
                        </p>

                        <div className="cart-items-summary-footer">
                            <span aria-hidden="true">✦</span>
                            <span>MADE FRESH. SERVED WITH LOVE.</span>
                            <span aria-hidden="true">✦</span>
                        </div>
                    </div>
                </aside>
            </div>
        );
    }
}
