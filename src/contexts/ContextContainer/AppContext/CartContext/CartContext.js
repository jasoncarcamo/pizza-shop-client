
import React from "react";
import CartService from "../../../../services/CartService/CartService";

const CartContext = React.createContext({
    cart: [],
    setDefault: () => {},
    getCart: () => {},
    setCart: () => {},
    updateCart: () => {},
    deleteCart: () => {}
});

export default CartContext;

export class CartContextProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: []
        };
    }

    componentDidMount() {
        const savedCart = CartService.getCart();

        if (!Array.isArray(savedCart)) {
            return;
        }

        this.setState({
            cart: savedCart
        });
    }

    saveCart = (cart) => {
        CartService.setCart(cart);
    };

    setDefault = () => {
        CartService.deleteCart();

        this.setState({
            cart: []
        });
    };

    getCart = () => {
        return this.state.cart;
    };

    hasSpecialRequest = (orderItem) => {
        return Boolean(
            orderItem.special_request &&
            String(orderItem.special_request).trim()
        );
    };

    canMergeItems = (existingItem, newItem) => {
        if (!existingItem || !newItem) {
            return false;
        }

        const sameItem = existingItem.id === newItem.id;

        const sameSize = (
            existingItem.size || ""
        ) === (
            newItem.size || ""
        );

        const existingHasRequest = this.hasSpecialRequest(existingItem);
        const newHasRequest = this.hasSpecialRequest(newItem);

        return (
            sameItem &&
            sameSize &&
            !existingHasRequest &&
            !newHasRequest
        );
    };

    setCart = (orderItem, index) => {
        if (!orderItem) {
            return;
        }

        this.setState((previousState) => {
            const cart = [...previousState.cart];

            const quantity = Math.max(
                1,
                Number(orderItem.quantity) || 1
            );

            const newItem = {
                ...orderItem,
                quantity
            };

            const existingIndex = cart.findIndex((item) => {
                return this.canMergeItems(item, newItem);
            });

            if (existingIndex !== -1) {
                const existingItem = cart[existingIndex];

                cart[existingIndex] = {
                    ...existingItem,
                    quantity: (
                        Number(existingItem.quantity) || 1
                    ) + quantity
                };
            } else {
                cart.push(newItem);
            }

            this.saveCart(cart);

            return {
                cart
            };
        });
    };

    updateCart = (orderItem, index) => {
        this.setState((previousState) => {
            const cart = [...previousState.cart];

            if (
                !Number.isInteger(index) ||
                index < 0 ||
                index >= cart.length
            ) {
                return null;
            }

            cart[index] = {
                ...orderItem
            };

            this.saveCart(cart);

            return {
                cart
            };
        });
    };

    deleteCart = (index) => {
        this.setState((previousState) => {
            const cart = [...previousState.cart];

            if (
                !Number.isInteger(index) ||
                index < 0 ||
                index >= cart.length
            ) {
                return null;
            }

            cart.splice(index, 1);

            this.saveCart(cart);

            return {
                cart
            };
        });
    };

    render() {
        const value = {
            cart: this.state.cart,
            setDefault: this.setDefault,
            getCart: this.getCart,
            setCart: this.setCart,
            updateCart: this.updateCart,
            deleteCart: this.deleteCart
        };

        return (
            <CartContext.Provider value={value}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}
