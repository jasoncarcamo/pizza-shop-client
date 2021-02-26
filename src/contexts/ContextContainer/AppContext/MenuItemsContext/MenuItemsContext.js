import React from "react";
import MenuItemsRequest from "../../../../services/FetchRequests/MenuItemsRequest";

const MenuItemsContext = React.createContext({
    menuItems: {},
    loading: false
});

export default MenuItemsContext;

export class MenuItemsProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menuItems: {},
            loading: false
        }
    };

    componentDidMount(){
        console.log("Mounted");
        this.getMenuItems();
    }

    toggleLoading = ()=>{
        this.setState({
            loading: !this.state.loading
        });
    }

    getMenuItems = ()=>{
        MenuItemsRequest.getAllMenuItems()
            .then( resData => {
                if(resData.menuItems.length > 0){
                    resData.menuItems.forEach( menuItem => {
                        this.setMenuItem(menuItem);
                    });
                };
            })
            .catch( err => {
                return this.setState({
                    error: err.error
                });
            });
    }

    setMenuItem = (menuItem)=>{
        const menuItems = this.state.menuItems;

        if(!menuItems.hasOwnProperty(menuItem.category)){
            menuItems[menuItem.category] = {};
        };

        menuItems[menuItem.category][menuItem.id] = menuItem;

        this.setState({
            menuItems
        });
    }

    updateMenuItem = (menuItem)=>{
        
    }

    deleteMenuItem = (menuItem)=>{
        
    }

    render(){
        const value = {
            menuItems: this.state.menuItems
        };
        console.log(value.menuItems);
        return (
            <MenuItemsContext.Provider value={value}>
                {this.props.children}
            </MenuItemsContext.Provider>
        )
    }
}