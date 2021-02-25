const CustomerTokenService = {
    getToken(){
        return window.localStorage.getItem("customer-token");
    },
    hasToken(){
        return this.getToken();
    },
    setToken(token){
        return window.localStorage.setItem("customer-token", token);
    },
    updateToken(token){
        return this.setToken(token);
    },
    deleteToken(){
        return window.localStorage.removeItem("customer-token");
    }
};

module.exports = CustomerTokenService;