import React from "react";

const AppContext = React.createContext({
    customerContext: {},
    orderContext: {},
    menuItemsContext: {},
    cartContext: {}
});

export default AppContext;

export class AppContextProvider extends React.Component{

    render(){
        const value = {
            customerContext: this.props.customerContext,
            ordersContext: this.props.ordersContext,
            menuItemsContext: this.props.menuItemsContext,
            cartContext: this.props.cartContext
        };
        console.log(value)
        return (
            <AppContext.Provider value={value}>
                {this.props.children}
            </AppContext.Provider>
        );
    };
} 