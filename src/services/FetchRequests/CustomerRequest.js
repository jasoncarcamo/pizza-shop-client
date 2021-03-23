const {url} = require("../../config");

const CustomerRequest = {
    getCustomer(token){
        return fetch(`${url}/api/customer`, {
            method: "GET",
            headers: {
                'content-type': "application/json",
                'authorization': `bearer ${token}`
            }
        })
            .then( res => {
                if(!res.ok){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            })
    },
    updateCustomer(token, updatedCustomer){
        return fetch(`${url}/api/customer`, {
            method: "PATCH",
            headers: {
                'content-type': "application/json",
                'authorization': `bearer ${token}`
            },
            body: JSON.stringify(updatedCustomer)
        })
            .then( res => {
                if(!res.ok){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            })
    },
    deleteCustomer(token, customer_id){
        return fetch(`${url}/api/customer/${customer_id}`, {
            method: "DELETE",
            headers: {
                'content-type': "application/json",
                'authorization': `bearer ${token}`
            }
        })
            .then( res => {
                if(!res.ok){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            })
    }
};

module.exports = CustomerRequest;