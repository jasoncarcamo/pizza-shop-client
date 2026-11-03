import React from "react";
import CartItems from "./CartItems/CartItems";
import "./CartPage.css";

export default class CartPage extends React.Component {
    render() {
        return (
            <main id="cart-page-section">
                <div className="cart-page-container">
                    <header className="cart-page-header">
                        <div className="cart-page-header-content">
                            <span className="cart-page-eyebrow">
                                THE PIZZA SPOT
                            </span>

                            <h1 className="cart-page-title">
                                Your Cart
                            </h1>

                            <p className="cart-page-description">
                                Almost ready for something delicious.
                                Review your order before checking out.
                            </p>
                        </div>

                        <div
                            className="cart-page-header-decoration"
                            aria-hidden="true"
                        >
                            <span>01</span>
                            <span className="cart-page-header-line"></span>
                            <span>YOUR ORDER</span>
                        </div>
                    </header>

                    <div className="cart-page-content">
                        <CartItems history={this.props.history} />
                    </div>
                </div>
            </main>
        );
    }
}
