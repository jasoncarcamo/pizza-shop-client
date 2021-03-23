const {url} = require("../../config");
console.log(process.env.REACT_APP_TEST_URL, url);
const AuthRequest = {
    registerCustomer(newCustomer){
        return fetch(`${url}/api/register`, {
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
        return fetch(`${url}/api/login`, {
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