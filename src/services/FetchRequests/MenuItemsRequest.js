const {url} = require("../../config");

const MenuItemsRequest = {
    getAllMenuItems(){
        return fetch(`${url}/api/menu-items`, {
            method: "GET",
            headers: {
                'content-type': "application/json",
            }
        })
            .then( res => {
                if(!res){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            });
    },
    getMenuItemById(token, id){
        return fetch(`${url}/api/menu-item/${id}`, {
            method: "GET",
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
    },
    createMenuItem(token, newMenuItem){
        return fetch(`${url}/api/menu-items`, {
            method: "POST",
            headers: {
                'content-type': "application/json",
                'authorization': `bearer ${token}`
            },
            body: JSON.stringify(newMenuItem)
        })
            .then( res => {
                if(!res){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            });
    },
    updateMenuItemById(token, updateMenuItem, id){
        return fetch(`${url}/api/menu-item/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': "application/json",
                'authorization': `bearer ${token}`
            },
            body: JSON.stringify(updateMenuItem)
        })
            .then( res => {
                if(!res){
                    return res.json().then( e => Promise.reject(e));
                };

                return res.json();
            });
    },
    deleteMenuItemById(token, id){
        return fetch(`${url}/api/menu-item/${id}`, {
            method: "DELETE",
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

module.exports = MenuItemsRequest;