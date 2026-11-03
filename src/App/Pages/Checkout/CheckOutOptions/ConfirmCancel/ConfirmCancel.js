
import React from "react";
import AppContext from "../../../../../contexts/ContextContainer/AppContext/AppContext";
import "./ConfirmCancel.css";

export default class ConfirmCancel extends React.Component {
    static contextType = AppContext;

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        if (event.key === "Escape") {
            this.toggleCancelOrder();
        }
    };

    toggleCancelOrder = () => {
        this.props.toggleCancelOrder();
    };

    handleCancel = () => {
        this.context.cartContext.setDefault();
        this.context.ordersContext.cancelOrder();

        this.toggleCancelOrder();
    };

    render() {
        return (
            <div className="confirm-cancel-overlay">
                <section
                    id="confirm-cancel-order-section"
                    role="alertdialog"
                    aria-modal="true"
                    aria-labelledby="confirm-cancel-title"
                    aria-describedby="confirm-cancel-description"
                >
                    <div
                        className="confirm-cancel-icon"
                        aria-hidden="true"
                    >
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 3 2 21h20L12 3Z" />
                            <path d="M12 9v5" />
                            <path d="M12 17h.01" />
                        </svg>
                    </div>

                    <span className="confirm-cancel-eyebrow">
                        CANCEL ORDER
                    </span>

                    <h2 id="confirm-cancel-title">
                        Cancel Your Order?
                    </h2>

                    <p id="confirm-cancel-description">
                        Are you sure you want to cancel your order?
                        All items in your cart and your current order
                        information will be removed.
                    </p>

                    <div id="confirm-cancel-order-options">
                        <button
                            type="button"
                            className="confirm-cancel-keep"
                            onClick={this.toggleCancelOrder}
                        >
                            Keep My Order
                        </button>

                        <button
                            type="button"
                            className="confirm-cancel-confirm"
                            onClick={this.handleCancel}
                        >
                            Yes, Cancel Order
                        </button>
                    </div>

                    <p className="confirm-cancel-note">
                        This action cannot be undone.
                    </p>
                </section>
            </div>
        );
    }
}
