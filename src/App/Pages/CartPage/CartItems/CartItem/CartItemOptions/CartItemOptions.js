
import React from "react";
import { createPortal } from "react-dom";
import EditItemCustomizer from "./EditItemCustomizer/EditItemCustomizer";
import RemoveItemBtn from "./RemoveItemBtn/RemoveItemBtn";
import "./CartItemOptions.css";

export default class CartItemOptions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleOptions: false,
            removeItem: false
        };
    }

    toggleOptions = () => {
        this.setState((previousState) => ({
            toggleOptions: !previousState.toggleOptions,
            removeItem: false
        }));
    };

    toggleRemoveItem = () => {
        this.setState((previousState) => ({
            removeItem: !previousState.removeItem,
            toggleOptions: false
        }));
    };

    render() {
        const { index, menuItem } = this.props;
        const { toggleOptions, removeItem } = this.state;

        return (
            <div className="cart-item-options">
                <button
                    type="button"
                    className="cart-item-options-edit"
                    onClick={this.toggleOptions}
                    aria-label={`Edit ${menuItem.name}`}
                    aria-haspopup="dialog"
                    aria-expanded={toggleOptions}
                >
                    <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L9 17l-4 1 1-4L16.5 3.5z" />
                    </svg>

                    <span>Edit Item</span>
                </button>

                <button
                    type="button"
                    className="cart-item-options-remove"
                    onClick={this.toggleRemoveItem}
                    aria-label={`Remove ${menuItem.name} from cart`}
                    aria-haspopup="dialog"
                    aria-expanded={removeItem}
                >
                    <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M3 6h18" />
                        <path d="M8 6V4h8v2" />
                        <path d="M19 6l-1 14H6L5 6" />
                        <path d="M10 10v6" />
                        <path d="M14 10v6" />
                    </svg>

                    <span>Remove</span>
                </button>

                {toggleOptions && createPortal(
                    <EditItemCustomizer
                        index={index}
                        toggleOptions={this.toggleOptions}
                        menuItem={menuItem}
                    />,
                    document.body
                )}

                {removeItem && createPortal(
                    <RemoveItemBtn
                        index={index}
                        toggleRemoveItem={this.toggleRemoveItem}
                    />,
                    document.body
                )}
            </div>
        );
    }
}
