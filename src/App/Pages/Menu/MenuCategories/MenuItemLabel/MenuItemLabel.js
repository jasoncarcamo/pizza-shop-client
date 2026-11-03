
import React from "react";
import { createPortal } from "react-dom";
import MenuItemCustomizer from "./MenuItemCustomizer/MenuItemCustomizer";
import FoodPlaceHolder from "./foodplaceholder.jpg";
import "./MenuItemLabel.css";

export default class MenuItemLabel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleOptions: false
        };
    }

    toggleOptions = () => {
        this.setState((previousState) => ({
            toggleOptions: !previousState.toggleOptions
        }));
    };

    getStartingPrice = () => {
        const { menuItem } = this.props;

        const prices = ["small", "medium", "large"]
            .filter((size) => menuItem[`size_${size}`])
            .map((size) => Number(menuItem[`price_${size}`]))
            .filter((price) => Number.isFinite(price) && price > 0);

        return prices.length > 0
            ? Math.min(...prices).toFixed(2)
            : null;
    };

    render() {
        const { menuItem, index } = this.props;
        const { toggleOptions } = this.state;
        const startingPrice = this.getStartingPrice();

        return (
            <React.Fragment>
                <article className="menu-item-label-section">
                    <div className="menu-item-label-image-container">
                        <img
                            src={menuItem.img}
                            alt={menuItem.name}
                            className="menu-item-label-image"
                            loading="lazy"
                        />

                        <span className="menu-item-label-category">
                            {menuItem.category}
                        </span>
                    </div>

                    <div className="menu-item-label-content">
                        <div className="menu-item-label-heading">
                            <h2>{menuItem.name}</h2>

                            {startingPrice && (
                                <span className="menu-item-label-price">
                                    ${startingPrice}
                                </span>
                            )}
                        </div>

                        <p className="menu-item-label-description">
                            {menuItem.description}
                        </p>

                        {Array.isArray(menuItem.ingredients) &&
                            menuItem.ingredients.length > 0 && (
                                <p className="menu-item-label-ingredients">
                                    {menuItem.ingredients.join(" · ")}
                                </p>
                            )}

                        <div className="menu-item-label-footer">
                            <span className="menu-item-label-price-caption">
                                {startingPrice
                                    ? "Starting at"
                                    : "Made fresh to order"}
                            </span>

                            <button
                                type="button"
                                className="menu-item-label-btn"
                                onClick={this.toggleOptions}
                                aria-label={`Customize ${menuItem.name}`}
                                aria-expanded={toggleOptions}
                            >
                                <span>Customize Order</span>
                                <span aria-hidden="true">→</span>
                            </button>
                        </div>
                    </div>
                </article>

                {toggleOptions && createPortal(
                    <MenuItemCustomizer
                        index={index}
                        menuItem={menuItem}
                        toggleOptions={this.toggleOptions}
                    />,
                    document.body
                )}
            </React.Fragment>
        );
    }
}
