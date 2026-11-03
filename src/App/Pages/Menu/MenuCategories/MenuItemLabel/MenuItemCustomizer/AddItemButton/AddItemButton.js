
import React from "react";
import AppContext from "../../../../../../../contexts/ContextContainer/AppContext/AppContext";
import AddConfirmation from "./AddConfirmation/AddConfirmation";
import "./AddItemButton.css";

export default class AddItemButton extends React.Component {
    static contextType = AppContext;

    constructor(props) {
        super(props);

        this.state = {
            addedItem: false,
            isAnimating: false
        };

        this.buttonRef = React.createRef();
        this.animationTimer = null;
        this.animationFrame = null;
        this.flyingItem = null;
    }

    componentWillUnmount() {
        this.clearAnimation();
    }

    clearAnimation = () => {
        if (this.animationTimer) {
            clearTimeout(this.animationTimer);
            this.animationTimer = null;
        }

        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = null;
        }

        if (this.flyingItem) {
            this.flyingItem.remove();
            this.flyingItem = null;
        }
    };

    finishAddingItem = () => {
        this.clearAnimation();

        this.setState({
            isAnimating: false,
            addedItem: true
        });
    };

    animateItemToCart = () => {
        const cartElement = document.querySelector("#cart-container");
        const buttonElement = this.buttonRef.current;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (
            !cartElement ||
            !buttonElement ||
            prefersReducedMotion
        ) {
            this.finishAddingItem();
            return;
        }

        const startRect = buttonElement.getBoundingClientRect();
        const endRect = cartElement.getBoundingClientRect();

        if (
            endRect.width === 0 ||
            endRect.height === 0
        ) {
            this.finishAddingItem();
            return;
        }

        const startX = startRect.left + startRect.width / 2;
        const startY = startRect.top + startRect.height / 2;

        const endX = endRect.left + endRect.width / 2;
        const endY = endRect.top + endRect.height / 2;

        const flyingItem = document.createElement("span");

        flyingItem.className = "add-item-flying-icon";
        flyingItem.textContent = "🍕";
        flyingItem.setAttribute("aria-hidden", "true");

        flyingItem.style.left = `${startX}px`;
        flyingItem.style.top = `${startY}px`;

        document.body.appendChild(flyingItem);

        this.flyingItem = flyingItem;

        this.animationFrame = requestAnimationFrame(() => {
            this.animationFrame = requestAnimationFrame(() => {
                if (!this.flyingItem) {
                    return;
                }

                const distanceX = endX - startX;
                const distanceY = endY - startY;

                this.flyingItem.style.transform = `
                    translate(
                        calc(-50% + ${distanceX}px),
                        calc(-50% + ${distanceY}px)
                    )
                    scale(0.25)
                    rotate(20deg)
                `;

                this.flyingItem.style.opacity = "0";
            });
        });

        this.animationTimer = setTimeout(() => {
            this.finishAddingItem();
        }, 250);
    };

    setCartContext = () => {
        const { orderItem } = this.props;

        this.setState({
            isAnimating: true
        });

        this.context.cartContext.setCart({
            ...orderItem,
            ingredients: {
                ...orderItem.ingredients
            }
        });

        this.animateItemToCart();
    };

    toggleOptions = () => {
        this.props.toggleOptions();
    };

    render() {
        const { addedItem, isAnimating } = this.state;

        return (
            <React.Fragment>
                <button
                    ref={this.buttonRef}
                    type="button"
                    className="add-item-cart-button"
                    onClick={this.setCartContext}
                >
                    <span
                        className="add-item-cart-icon"
                        aria-hidden="true"
                    >
                        {isAnimating ? "✓" : "+"}
                    </span>

                    <span>
                        {isAnimating
                            ? "Adding to Cart..."
                            : addedItem
                                ? "Added to Cart"
                                : "Add to Cart"}
                    </span>
                </button>
            </React.Fragment>
        );
    }
}
