
import React from "react";
import MenuItemsData from "./MenuItemsData";

const organizeMenuItems = (items) => {
    return items.reduce((categories, menuItem) => {
        if (!categories[menuItem.category]) {
            categories[menuItem.category] = {};
        }

        categories[menuItem.category][menuItem.id] = {
            ...menuItem,
            ingredients: [...menuItem.ingredients]
        };

        return categories;
    }, {});
};

const MenuItemsContext = React.createContext({
    menuItems: {},
    loading: false,
    error: "",
    getMenuItems: () => {},
    setMenuItem: () => {},
    updateMenuItem: () => {},
    deleteMenuItem: () => {}
});

export default MenuItemsContext;

export class MenuItemsProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuItems: organizeMenuItems(MenuItemsData),
            loading: false,
            error: ""
        };
    }

    getMenuItems = () => {
        this.setState({
            menuItems: organizeMenuItems(MenuItemsData),
            loading: false,
            error: ""
        });
    };

    setMenuItem = (menuItem) => {
        this.setState((previousState) => {
            const menuItems = {
                ...previousState.menuItems
            };

            const categoryItems = {
                ...(menuItems[menuItem.category] || {})
            };

            categoryItems[menuItem.id] = {
                ...menuItem,
                ingredients: Array.isArray(menuItem.ingredients)
                    ? [...menuItem.ingredients]
                    : []
            };

            menuItems[menuItem.category] = categoryItems;

            return {
                menuItems
            };
        });
    };

    updateMenuItem = (menuItem) => {
        this.setMenuItem(menuItem);
    };

    deleteMenuItem = (menuItem) => {
        this.setState((previousState) => {
            const menuItems = {
                ...previousState.menuItems
            };

            if (!menuItems[menuItem.category]) {
                return null;
            }

            const categoryItems = {
                ...menuItems[menuItem.category]
            };

            delete categoryItems[menuItem.id];

            menuItems[menuItem.category] = categoryItems;

            return {
                menuItems
            };
        });
    };

    render() {
        const value = {
            menuItems: this.state.menuItems,
            loading: this.state.loading,
            error: this.state.error,
            getMenuItems: this.getMenuItems,
            setMenuItem: this.setMenuItem,
            updateMenuItem: this.updateMenuItem,
            deleteMenuItem: this.deleteMenuItem
        };

        return (
            <MenuItemsContext.Provider value={value}>
                {this.props.children}
            </MenuItemsContext.Provider>
        );
    }
}
