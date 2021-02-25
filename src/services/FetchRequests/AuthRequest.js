const AuthRequest = {
    registerCustomer(newCustomer){
        return fetch(`https://localhost:8000/api/register`, {
            method: "POST",
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(newCustomer)
        })
            .then( res => {
                if(!res.ok){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            })
    },
    logInCustomer(customer){
        return fetch(`https://localhost:8000/api/login`, {
            method: "POST",
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(customer)
        })
            .then( res => {
                if(!res.ok){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            })
    }
};

module.exports = AuthRequest;