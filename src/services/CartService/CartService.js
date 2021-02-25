const CartService = {
    getCart(){
        const cart = JSON.parse(window.localStorage.getItem("cart"));

        return cart;
    },
    hasCart(){
        return this.getCart();
    },
    setCart(cart){
        let stringfiedCart = JSON.stringify(cart);

        return window.localStorage.setItem("cart", stringfiedCart);
    },
    updateCart(cart){
        return this.setCart(cart);
    },
    deleteCart(){
        return window.localStorage.removeItem("cart");
    }
};

module.exports = CartService;