import React from "react";
import MenuItemsRequest from "../../services/FetchRequests/MenuItemsRequest"

const MenuItemsContext = React.createContext({
    menuItems: {}
});

export default MenuItemsContext;

export class MenuItemsProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menuItems: {}
        }
    };

    getMenuItems = ()=>{

    }

    setMenuItem = (menuItem)=>{

    }

    updateMenuItem = (menuItem)=>{
        
    }

    deleteMenuItem = (menuItem)=>{
        
    }

    render(){
        const value = {
            menuItems: this.state.menuItems
        };

        return (
            <MenuItemsContext.Provider value={value}>
                {this.props.children}
            </MenuItemsContext.Provider>
        )
    }
}