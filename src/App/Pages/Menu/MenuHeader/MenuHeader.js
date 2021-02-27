import React from "react";
import AppContext from "../../../../contexts/ContextContainer/AppContext/AppContext";
import Pluralize from "pluralize";
import {Link} from "react-router-dom";

export default class MenuHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    static contextType = AppContext;

    renderMenuCategories = ({menuItemsContext})=>{
        let menuItems = Object.keys(menuItemsContext.menuItems);
        
        menuItems = menuItems.map((menuItem, i)=>{
            return (
                <li>
                    <Link to={`/menu/${menuItem.toLowerCase()}`}>{Pluralize.plural(menuItem)}</Link>
                </li>
            );
        });

        return menuItems;
    }

    render(){
        return (
            <section>
                <ul>
                    {this.renderMenuCategories(this.context)}
                </ul>
                <h2>Menu header</h2>
            </section>
        );
    };
}