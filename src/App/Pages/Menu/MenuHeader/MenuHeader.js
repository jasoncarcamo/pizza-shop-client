import React from "react";
import AppContext from "../../../../contexts/ContextContainer/AppContext/AppContext";
import Pluralize from "pluralize";
import {NavLink} from "react-router-dom";
import "./MenuHeader.css";

export default class MenuHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    static contextType = AppContext;

    componentDidMount(){
        this.props.history.push("/menu/pizza");
    }

    renderMenuCategories = ({menuItemsContext})=>{
        let menuItems = Object.keys(menuItemsContext.menuItems);
        
        menuItems = menuItems.map((menuItem, i)=>{
            
            return (
                <li key={i} className="menu-header-list-item">
                    <NavLink activeClassName="active-menu-item" to={`/menu/${menuItem.toLowerCase()}`}>{Pluralize.plural(menuItem)}</NavLink>
                </li>
            );
        });

        return menuItems;
    }

    render(){
        return (
            <section id="menu-header-section">
                <ul id="menu-header-list">
                    {this.renderMenuCategories(this.context)}
                </ul>
            </section>
        );
    };
}