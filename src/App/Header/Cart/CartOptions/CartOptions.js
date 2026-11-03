
import React from "react";
import "./CartOptions.css";

export default class CartOptions extends React.Component {
    handleStartOrder = () => {
        this.props.onNavigate("/menu/pizza");
    };

    handleEditCart = () => {
        this.props.onNavigate("/cart/edit");
    };

    handleCheckout = () => {
        this.props.onNavigate("/cart/checkout");
    };

    render() {
        const cart = Array.isArray(this.props.cart)
            ? this.props.cart
            : [];

        const itemCount = cart.length;
        const hasItems = itemCount > 0;

        return (
            <div
                id="cart-options-section"
                role="region"
                aria-label="Shopping cart options"
            >
                <div className="cart-options-header">
                    <div>
                        <span className="cart-options-eyebrow">
                            YOUR ORDER
                        </span>

                        <h2>Shopping Cart</h2>
                    </div>

                    <button
                        type="button"
                        className="cart-options-close"
                        onClick={this.props.closeOptions}
                        aria-label="Close cart options"
                    >
                        <span aria-hidden="true">×</span>
                    </button>
                </div>

                {hasItems ? (
                    <>
                        <div className="cart-options-summary">
                            <span className="cart-options-summary-icon" aria-hidden="true">
                                ✓
                            </span>

                            <div>
                                <strong>
                                    {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
                                </strong>

                                <p>
                                    Your next delicious meal is
                                    one step closer.
                                </p>
                            </div>
                        </div>

                        <div className="cart-options-actions">
                            <button
                                type="button"
                                className="cart-options-primary"
                                onClick={this.handleCheckout}
                            >
                                Checkout
                                <span aria-hidden="true">→</span>
                            </button>

                            <button
                                type="button"
                                className="cart-options-secondary"
                                onClick={this.handleEditCart}
                            >
                                View & Edit Cart
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="cart-options-empty">
                            <span className="cart-options-empty-icon" aria-hidden="true">
                                ◇
                            </span>

                            <h3>Your cart is empty</h3>

                            <p>
                                Something delicious is waiting.
                                Explore our menu to get started.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="cart-options-primary"
                            onClick={this.handleStartOrder}
                        >
                            Explore Menu
                            <span aria-hidden="true">→</span>
                        </button>
                    </>
                )}
            </div>
        );
    }
}
