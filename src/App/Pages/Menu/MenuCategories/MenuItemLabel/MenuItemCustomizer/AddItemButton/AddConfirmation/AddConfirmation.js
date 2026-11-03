
import React from "react";
import "./AddConfirmation.css";

export default class AddConfirmation extends React.Component {
    toggleOptions = () => {
        this.props.toggleOptions();
    };

    render() {
        const { orderItem } = this.props;

        const category = orderItem && orderItem.category
            ? orderItem.category.toLowerCase()
            : "item";

        return (
            <section
                className="add-confirmed-section"
                role="status"
                aria-labelledby="add-confirmed-title"
            >
                <div className="add-confirmed-content">
                    <div
                        className="add-confirmed-icon"
                        aria-hidden="true"
                    >
                        <svg
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12.5L9.5 17L19 7" />
                        </svg>
                    </div>

                    <span className="add-confirmed-eyebrow">
                        ADDED TO YOUR CART
                    </span>

                    <h2 id="add-confirmed-title">
                        Delicious Choice!
                    </h2>

                    <p className="add-confirmed-description">
                        Your {category} has been added to your cart.
                        You're one step closer to something delicious.
                    </p>

                    <div className="add-confirmed-divider" aria-hidden="true">
                        <span></span>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <path d="M12 3L14.8 9.2L21 12L14.8 14.8L12 21L9.2 14.8L3 12L9.2 9.2L12 3Z" />
                        </svg>
                        <span></span>
                    </div>

                    <button
                        type="button"
                        className="add-confirmed-button"
                        onClick={this.toggleOptions}
                    >
                        <span>Continue Ordering</span>

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
                            <path d="M5 12H19" />
                            <path d="M12 5L19 12L12 19" />
                        </svg>
                    </button>
                </div>
            </section>
        );
    }
}
