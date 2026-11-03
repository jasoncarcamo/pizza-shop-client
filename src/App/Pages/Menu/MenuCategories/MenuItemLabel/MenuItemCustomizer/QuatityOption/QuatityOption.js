
import React from "react";
import "./QuatityOption.css";

export default class QuatityOption extends React.Component {
    constructor(props) {
        super(props);

        this.minimumQuantity = 1;
        this.maximumQuantity = 20;
    }

    updateQuantity = (quantity) => {
        const { orderItem, updateOrderItem } = this.props;

        if (
            quantity < this.minimumQuantity ||
            quantity > this.maximumQuantity
        ) {
            return;
        }

        updateOrderItem({
            ...orderItem,
            quantity
        });
    };

    addQuantity = () => {
        const currentQuantity = Number(this.props.orderItem.quantity) || 1;

        this.updateQuantity(currentQuantity + 1);
    };

    decreaseQuantity = () => {
        const currentQuantity = Number(this.props.orderItem.quantity) || 1;

        this.updateQuantity(currentQuantity - 1);
    };

    render() {
        const { orderItem } = this.props;
        const quantity = Number(orderItem.quantity) || 1;

        return (
            <section
                className="quatity-option-section"
                aria-label="Select quantity"
            >
                <div className="quatity-option-heading">
                    <div>
                        <h3 className="quatity-option-title">
                            Quantity
                        </h3>

                        <p className="quatity-option-description">
                            How many would you like to order?
                        </p>
                    </div>

                    <span className="quatity-option-limit">
                        MAX {this.maximumQuantity}
                    </span>
                </div>

                <div className="quatity-option-controls">
                    <button
                        type="button"
                        className="quatity-option-button"
                        onClick={this.decreaseQuantity}
                        disabled={quantity <= this.minimumQuantity}
                        aria-label="Decrease quantity"
                    >
                        <span aria-hidden="true">−</span>
                    </button>

                    <output
                        className="quatity-option-value"
                        aria-live="polite"
                        aria-label={`Quantity: ${quantity}`}
                    >
                        {quantity}
                    </output>

                    <button
                        type="button"
                        className="quatity-option-button"
                        onClick={this.addQuantity}
                        disabled={quantity >= this.maximumQuantity}
                        aria-label="Increase quantity"
                    >
                        <span aria-hidden="true">+</span>
                    </button>
                </div>
            </section>
        );
    }
}
