const OrderRequest = {
    getOrderById(id){
        return fetch(`https://mighty-hamlet-99491.herokuapp.com/api/order/${id}`, {
            method: "GET",
            headers: {
                'content-type': "application/json",
                'authorization': `bearer `
            }
        })
            .then( res => {
                if(!res){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            });
    },
    createOrder(token, newOrder){
        return fetch(`https://mighty-hamlet-99491.herokuapp.com/api/orders`, {
            method: "POST",
            headers: {
                'content-type': "application/json",
                'authorization': `bearer ${token}`
            },
            body: JSON.stringify(newOrder)
        })
            .then( res => {
                if(!res){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            });
    },
    updateOrderById(token, updatedOrder, id){
        return fetch(`https://mighty-hamlet-99491.herokuapp.com/api/order/${id}`, {
            method: "POST",
            headers: {
                'content-type': "application/json",
                'authorization': `bearer ${token}`
            },
            body: JSON.stringify(updatedOrder)
        })
            .then( res => {
                if(!res){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            });
    },
    deleteOrder(token, id){
        return fetch(`https://mighty-hamlet-99491.herokuapp.com/api/order/${id}`, {
            method: "POST",
            headers: {
                'content-type': "application/json",
                'authorization': `bearer ${token}`
            }
        })
            .then( res => {
                if(!res){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            });
    }
};

module.exports = OrderRequest;