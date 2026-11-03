
import React from "react";
import SizeOptions from "./SizeOptions/SizeOptions";
import SpecialRequestOption from "./SpecialRequestOption/SpecialRequestOption";
import QuatityOption from "./QuatityOption/QuatityOption";
import AddItemButton from "./AddItemButton/AddItemButton";
import CancelItemBtn from "./CancelItemBtn/CancelItemBtn";
import "./MenuItemCustomizer.css";

export default class MenuItemCustomizer extends React.Component {
    constructor(props) {
        super(props);

        const menuItem = props.menuItem;

        const availableSizes = [
            "small",
            "medium",
            "large"
        ];

        const defaultSize = availableSizes.find((size) => {
            return menuItem[`size_${size}`] &&
                Number(menuItem[`price_${size}`]) > 0;
        });

        const selectedSize = defaultSize || "small";

        this.state = {
            menuItem,
            orderItem: {
                id: menuItem.id,
                category: menuItem.category,
                name: menuItem.name,
                description: menuItem.description,
                price: Number(menuItem[`price_${selectedSize}`]) || 0,
                size: `size_${selectedSize}`,
                ingredients: {},
                special_request: "",
                quantity: 1
            }
        };

        this.modalRef = React.createRef();
        this.previousActiveElement = null;
    }

    componentDidMount() {
        this.previousActiveElement = document.activeElement;

        document.addEventListener("keydown", this.handleKeyDown);

        document.body.style.overflow = "hidden";

        if (this.modalRef.current) {
            this.modalRef.current.focus();
        }
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);

        document.body.style.overflow = "";
        
        if (
            this.previousActiveElement &&
            typeof this.previousActiveElement.focus === "function"
        ) {
            this.previousActiveElement.focus();
        }
    }

    handleKeyDown = (event) => {
        if (event.key === "Escape") {
            this.toggleOptions();
        }
    };

    toggleOptions = () => {
        this.props.toggleOptions();
    };

    handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            this.toggleOptions();
        }
    };

    updateOrderItem = (orderItem) => {
        this.setState({
            orderItem
        });
    };

    getTotalPrice = () => {
        const price = Number(this.state.orderItem.price) || 0;
        const quantity = Number(this.state.orderItem.quantity) || 1;

        return (price * quantity).toFixed(2);
    };

    render() {
        const { menuItem, orderItem } = this.state;

        return (
            <div
                className="menu-item-customizer-container"
                onMouseDown={this.handleOverlayClick}
            >
                <section
                    className="menu-item-customizer"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="menu-customizer-title"
                    ref={this.modalRef}
                    tabIndex={-1}
                >
                    <div className="menu-customizer-header">
                        <div>
                            <span className="menu-customizer-eyebrow">
                                CUSTOMIZE YOUR ORDER
                            </span>

                            <h2 id="menu-customizer-title">
                                {orderItem.name}
                            </h2>
                        </div>

                        <button
                            type="button"
                            className="menu-customizer-close"
                            onClick={this.toggleOptions}
                            aria-label="Close customization"
                        >
                            ×
                        </button>
                    </div>

                    <div className="menu-customizer-content">
                        <p className="menu-customizer-description">
                            {menuItem.description}
                        </p>

                        <div className="menu-customizer-price-row">
                            <span>Selected item price</span>

                            <strong>
                                ${Number(orderItem.price || 0).toFixed(2)}
                            </strong>
                        </div>

                        <div className="menu-customizer-section">
                            <SizeOptions
                                menuItem={menuItem}
                                orderItem={orderItem}
                                updateOrderItem={this.updateOrderItem}
                            />
                        </div>

                        <div className="menu-customizer-section">
                            <SpecialRequestOption
                                orderItem={orderItem}
                                updateOrderItem={this.updateOrderItem}
                            />
                        </div>

                        <div className="menu-customizer-section">
                            <QuatityOption
                                menuItem={menuItem}
                                orderItem={orderItem}
                                updateOrderItem={this.updateOrderItem}
                            />
                        </div>
                    </div>

                    <div className="menu-customizer-footer">
                        <div className="menu-customizer-total">
                            <span>Estimated Total</span>

                            <strong>
                                ${this.getTotalPrice()}
                            </strong>
                        </div>

                        <div className="menu-item-custom-btn-container">
                            <CancelItemBtn
                                updateOrderItem={this.updateOrderItem}
                                toggleOptions={this.toggleOptions}
                            />

                            <AddItemButton
                                index={this.props.index}
                                toggleOptions={this.toggleOptions}
                                orderItem={orderItem}
                            />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
