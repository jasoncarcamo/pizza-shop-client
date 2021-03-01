const OrderServce = {
    getOrder(){
        return JSON.parse(window.localStorage.getItem("order"));
    },
    setOrder(order){
        const newOrder = JSON.stringify(order);

        return window.localStorage.setItem("order", newOrder);
    },
    updateOrder(order){
        return this.setOrder(order);
    },
    deleteOrder(){
        return window.localStorage.removeItem("order");
    }
};

module.exports = OrderServce;