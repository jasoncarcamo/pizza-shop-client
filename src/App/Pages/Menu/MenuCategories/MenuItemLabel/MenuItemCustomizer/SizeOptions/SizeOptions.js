
import React from "react";
import "./SizeOptions.css";

export default class SizeOptions extends React.Component {
    constructor(props) {
        super(props);

        this.radioGroupName = `menu-item-size-${props.menuItem.id}`;
    }

    getAvailableSizes = () => {
        const { menuItem } = this.props;

        return ["small", "medium", "large"]
            .filter((size) => {
                const sizeLabel = menuItem[`size_${size}`];
                const price = Number(menuItem[`price_${size}`]);

                return Boolean(sizeLabel) &&
                    Number.isFinite(price) &&
                    price > 0;
            })
            .map((size) => ({
                key: `size_${size}`,
                label: size.charAt(0).toUpperCase() + size.slice(1),
                description: menuItem[`size_${size}`],
                price: Number(menuItem[`price_${size}`])
            }));
    };

    handleSize = (event) => {
        const selectedSize = event.target.value;
        const { menuItem, orderItem, updateOrderItem } = this.props;

        const priceKey = selectedSize.replace("size_", "price_");
        const selectedPrice = Number(menuItem[priceKey]);

        if (!Number.isFinite(selectedPrice) || selectedPrice <= 0) {
            return;
        }

        updateOrderItem({
            ...orderItem,
            size: selectedSize,
            price: selectedPrice
        });
    };

    render() {
        const { orderItem } = this.props;
        const availableSizes = this.getAvailableSizes();

        if (availableSizes.length === 0) {
            return null;
        }

        return (
            <fieldset className="size-option-section">
                <legend className="size-option-title">
                    Choose Your Size
                </legend>

                <p className="size-option-description">
                    Select the portion that's right for you.
                </p>

                <div className="size-option-section-list">
                    {availableSizes.map((size) => {
                        const isSelected = orderItem.size === size.key;

                        return (
                            <label
                                key={size.key}
                                className={
                                    `size-option-card ${
                                        isSelected ? "size-option-card--selected" : ""
                                    }`
                                }
                            >
                                <input
                                    type="radio"
                                    name={this.radioGroupName}
                                    value={size.key}
                                    className="size-option-input"
                                    checked={isSelected}
                                    onChange={this.handleSize}
                                />

                                <span
                                    className="size-option-radio"
                                    aria-hidden="true"
                                />

                                <span className="size-option-info">
                                    <span className="size-option-name">
                                        {size.label}
                                    </span>

                                    <span className="size-option-details">
                                        {size.description}
                                    </span>
                                </span>

                                <span className="size-option-price">
                                    ${size.price.toFixed(2)}
                                </span>
                            </label>
                        );
                    })}
                </div>
            </fieldset>
        );
    }
}
