
import React from "react";
import AppContext from "../../../contexts/ContextContainer/AppContext/AppContext";
import CheckOutOptions from "./CheckOutOptions/CheckOutOptions";
import OrderItems from "./OrderItems/OrderItems";
import CartService from "../../../services/CartService/CartService";
import OrderService from "../../../services/OrderServce/OrderServce";
import "./Checkout.css";

export default class Checkout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: [],
            order: {},
            loading: true
        };
    }

    static contextType = AppContext;

    componentDidMount() {
        const cart = CartService.getCart();
        const order = OrderService.getOrder();

        if (!order) {
            this.props.history.replace("/order");
            return;
        }

        if (!Array.isArray(cart) || cart.length === 0) {
            this.props.history.replace("/cart/edit");
            return;
        }

        this.updateCheckout(cart, order);
    }

    componentDidUpdate() {
        const cart = this.context.cartContext.cart || [];

        if (this.state.loading) {
            return;
        }

        if (cart.length === 0) {
            this.props.history.replace("/cart/edit");
            return;
        }

        const currentSubtotal = this.calculateSubtotal(cart);

        if (currentSubtotal !== this.state.order.subtotal) {
            this.updateCheckout(cart, this.state.order);
        }
    }

    calculateSubtotal = (cart) => {
        const subtotal = cart.reduce((total, item) => {
            const price = Number(item.price) || 0;
            const quantity = Number(item.quantity) || 1;

            return total + (price * quantity);
        }, 0);

        return Number(subtotal.toFixed(2));
    };

    getTotalQuantity = (cart) => {
        return cart.reduce((total, item) => {
            return total + (Number(item.quantity) || 1);
        }, 0);
    };

    updateCheckout = (cart, order) => {
        const subtotal = this.calculateSubtotal(cart);

        this.setState({
            cart,
            order: {
                ...order,
                subtotal
            },
            loading: false
        });
    };

    render() {
        const { cart, order, loading } = this.state;
        console.log(this.context)
        if (loading) {
            return (
                <main id="checkout-section">
                    <div className="checkout-loading" role="status">
                        Preparing your checkout...
                    </div>
                </main>
            );
        }

        const totalQuantity = this.getTotalQuantity(cart);

        return (
            <main id="checkout-section">
                <div className="checkout-container">
                    <header className="checkout-page-header">
                        <span className="checkout-eyebrow">
                            THE PIZZA SPOT
                        </span>

                        <h1>
                            Checkout
                        </h1>

                        <p>
                            You're just a few steps away from enjoying
                            something delicious. Review your order and
                            complete your details below.
                        </p>
                    </header>

                    <nav
                        className="checkout-progress"
                        aria-label="Checkout progress"
                    >
                        <div className="checkout-progress-step checkout-progress-step-complete">
                            <span className="checkout-progress-number">
                                ✓
                            </span>

                            <span>Cart</span>
                        </div>

                        <span
                            className="checkout-progress-connector"
                            aria-hidden="true"
                        ></span>

                        <div
                            className="checkout-progress-step checkout-progress-step-active"
                            aria-current="step"
                        >
                            <span className="checkout-progress-number">
                                2
                            </span>

                            <span>Checkout</span>
                        </div>

                        <span
                            className="checkout-progress-connector"
                            aria-hidden="true"
                        ></span>

                        <div className="checkout-progress-step">
                            <span className="checkout-progress-number">
                                3
                            </span>

                            <span>Confirmation</span>
                        </div>
                    </nav>

                    <div id="checkout-info-container">
                        <section
                            className="checkout-details-panel"
                            aria-labelledby="checkout-details-title"
                        >
                            <div className="checkout-panel-heading">
                                <span className="checkout-panel-eyebrow">
                                    COMPLETE YOUR ORDER
                                </span>

                                <h2 id="checkout-details-title">
                                    Your Details
                                </h2>

                                <p>
                                    Confirm your order preferences
                                    and checkout information.
                                </p>
                            </div>

                            <CheckOutOptions
                                history={this.props.history}
                                order={order}
                            />
                        </section>

                        <aside
                            className="checkout-summary-panel"
                            aria-labelledby="checkout-summary-title"
                        >
                            <div className="checkout-summary-heading">
                                <span className="checkout-panel-eyebrow">
                                    ORDER OVERVIEW
                                </span>

                                <h2 id="checkout-summary-title">
                                    Your Order
                                </h2>

                                <span className="checkout-summary-count">
                                    {totalQuantity} {totalQuantity === 1 ? "item" : "items"}
                                </span>
                            </div>

                            <div className="checkout-summary-items">
                                <OrderItems />
                            </div>

                            <div className="checkout-summary-total">
                                <div>
                                    <span>Subtotal</span>
                                    <small>Before applicable taxes and fees</small>
                                </div>

                                <strong>
                                    ${order.subtotal.toFixed(2)}
                                </strong>
                            </div>

                            <div className="checkout-summary-footer">
                                <span aria-hidden="true">✦</span>
                                MADE FRESH, JUST FOR YOU
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        );
    }
}
