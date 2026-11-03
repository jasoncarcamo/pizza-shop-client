
import React from "react";
import CartItemOptions from "./CartItemOptions/CartItemOptions";
import "./CartItem.css";

export default class CartItem extends React.Component {
    getFormattedSize = () => {
        const { size } = this.props.cartItem;

        if (!size) {
            return "Regular";
        }

        return size
            .replace("size_", "")
            .replace(/_/g, " ")
            .replace(/\b\w/g, (character) => character.toUpperCase());
    };

    getSubtotal = () => {
        const { price, quantity } = this.props.cartItem;

        const unitPrice = Number(price) || 0;
        const itemQuantity = Number(quantity) || 1;

        return (unitPrice * itemQuantity).toFixed(2);
    };

    render() {
        const { cartItem, index } = this.props;

        const {
            name,
            img,
            price,
            quantity,
            special_request
        } = cartItem;

        return (
            <article className="cart-item-card">
                <div className="cart-item-image-wrapper">
                    {img ? (
                        <img
                            src={img}
                            alt={name}
                            className="cart-item-image"
                            loading="lazy"
                            decoding="async"
                        />
                    ) : (
                        <div
                            className="cart-item-image-placeholder"
                            aria-hidden="true"
                        >
                            <span>🍕</span>
                        </div>
                    )}
                </div>

                <div className="cart-item-information">
                    <div className="cart-item-top">
                        <div className="cart-item-heading">
                            <span className="cart-item-eyebrow">
                                FRESHLY PREPARED
                            </span>

                            <h3 className="cart-item-name">
                                {name}
                            </h3>
                        </div>

                        <div className="cart-item-price">
                            <span className="cart-item-price-label">
                                Subtotal
                            </span>

                            <strong>
                                ${this.getSubtotal()}
                            </strong>
                        </div>
                    </div>

                    <div className="cart-item-details">
                        <div className="cart-item-detail">
                            <span className="cart-item-detail-label">
                                Size
                            </span>

                            <span className="cart-item-detail-value">
                                {this.getFormattedSize()}
                            </span>
                        </div>

                        <div className="cart-item-detail">
                            <span className="cart-item-detail-label">
                                Quantity
                            </span>

                            <span className="cart-item-detail-value">
                                {quantity || 1}
                            </span>
                        </div>

                        <div className="cart-item-detail">
                            <span className="cart-item-detail-label">
                                Unit price
                            </span>

                            <span className="cart-item-detail-value">
                                ${(Number(price) || 0).toFixed(2)}
                            </span>
                        </div>
                    </div>

                    {special_request && (
                        <div className="cart-item-special-request">
                            <span className="cart-item-special-request-label">
                                Special instructions
                            </span>

                            <p>{special_request}</p>
                        </div>
                    )}

                    <div className="cart-item-actions">
                        <CartItemOptions
                            index={index}
                            menuItem={cartItem}
                        />
                    </div>
                </div>
            </article>
        );
    }
}
