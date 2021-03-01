import React from "react";
import {AppContextProvider} from "./AppContext/AppContext";
import CustomerContext, {CustomerContextProvider} from "./AppContext/CustomerContext/CustomerContext";
import MenuItemsContext, {MenuItemsProvider} from "./AppContext/MenuItemsContext/MenuItemsContext";
import OrdersContext, {OrdersContextProvider} from "./AppContext/OrdersContext/OrdersContext";
import CartContext, {CartContextProvider} from "./AppContext/CartContext/CartContext";

// made to consume all contexts and then passed them down to app context, to act as the context container
export default class ContextContainer extends React.Component{
    render(){
        return (
            <MenuItemsProvider>
                <MenuItemsContext.Consumer>
                    { menuItemsContext => (
                        <CartContextProvider>
                            <CartContext.Consumer>
                                { cartContext => (
                                    <OrdersContextProvider>
                                        <OrdersContext.Consumer>
                                            { ordersContext => (
                                                <CustomerContextProvider
                                                    ordersContext={ordersContext}
                                                >
                                                    <CustomerContext.Consumer>
                                                        { customerContext => (
                                                            <AppContextProvider
                                                                menuItemsContext={menuItemsContext}
                                                                cartContext={cartContext}
                                                                ordersContext={ordersContext}
                                                                customerContext={customerContext}
                                                            >
                                                                {this.props.children}
                                                            </AppContextProvider>
                                                        )}
                                                    </CustomerContext.Consumer>
                                                </CustomerContextProvider>
                                            )}
                                        </OrdersContext.Consumer>
                                    </OrdersContextProvider>
                                )}
                            </CartContext.Consumer>
                        </CartContextProvider>
                    )}
                </MenuItemsContext.Consumer>
            </MenuItemsProvider>
        );
    };
};