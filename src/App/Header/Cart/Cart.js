
import React from "react";
import AppContext from "../../../contexts/ContextContainer/AppContext/AppContext";
import CartOptions from "./CartOptions/CartOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

export default class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openOptions: false
        };

        this.cartContainerRef = React.createRef();
    }

    static contextType = AppContext;

    componentDidMount() {
        document.addEventListener("mousedown", this.handleOutsideClick);
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleOutsideClick);
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleOutsideClick = (event) => {
        if (
            this.cartContainerRef.current &&
            !this.cartContainerRef.current.contains(event.target)
        ) {
            this.closeOptions();
        }
    };

    handleKeyDown = (event) => {
        if (event.key === "Escape" && this.state.openOptions) {
            this.closeOptions();
        }
    };

    openOptions = () => {
        this.setState({
            openOptions: true
        });
    };

    closeOptions = () => {
        this.setState({
            openOptions: false
        });
    };

    toggleOptions = () => {
        this.setState((previousState) => ({
            openOptions: !previousState.openOptions
        }));
    };

    toggleMobileMenu = () => {
        if (typeof this.props.toggleMobileMenu === "function") {
            this.props.toggleMobileMenu();
        }
    };

    handleNavigate = (path) => {
        this.closeOptions();

        this.toggleMobileMenu();

        this.props.history.push(path);
    };

    render() {
        const cartContext = this.context.cartContext || {};
        const cart = Array.isArray(cartContext.cart)
            ? cartContext.cart
            : [];

        const itemCount = cart.length;
        const { openOptions } = this.state;

        return (
            <div
                id="cart-container"
                ref={this.cartContainerRef}
                onMouseLeave={this.closeOptions}
            >
                <button
                    type="button"
                    className={`cart-trigger ${openOptions ? "cart-trigger--active" : ""}`}
                    onClick={this.toggleOptions}
                    aria-label={`Shopping cart, ${itemCount} ${itemCount === 1 ? "item" : "items"}`}
                    aria-expanded={openOptions}
                    aria-controls="cart-options-section"
                    aria-haspopup="true"
                >
                    <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="cart-icon"
                        aria-hidden="true"
                    />

                    {itemCount > 0 && (
                        <span className="cart-count" aria-hidden="true">
                            {itemCount > 99 ? "99+" : itemCount}
                        </span>
                    )}
                </button>

                {openOptions && (
                    <CartOptions
                        cart={cart}
                        onNavigate={this.handleNavigate}
                        closeOptions={this.closeOptions}
                    />
                )}
            </div>
        );
    }
}
