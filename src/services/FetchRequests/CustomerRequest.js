const CustomerRequest = {
    getCustomer(token){
        return fetch(`https://mighty-hamlet-99491.herokuapp.com/api/customer`, {
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
        return fetch(`https://mighty-hamlet-99491.herokuapp.com/api/customer`, {
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
        return fetch(`https://mighty-hamlet-99491.herokuapp.com/api/customer/${customer_id}`, {
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