import React from "react";
import MenuItemLabel from "./MenuItemLabel/MenuItemLabel";
import AppContext from "../../../../contexts/ContextContainer/AppContext/AppContext";
import {Link} from "react-router-dom";
import Pluralize from "pluralize";
import "./MenuCategories.css";

export default class MenuCategories extends React.Component{

    static contextType = AppContext;

    componentDidMount(){
    }

    getCategory = ()=>{
        let category = Pluralize.singular(this.props.match.url.split("/")[2]);
        
        // make first letter capital
        category = category.split("");

        category[0] = category[0].toUpperCase();

        category = category.join("")

        return category;
    }

    redirect = (category)=>{
        this.props.history.push(`/menu/${category.toLowerCase()}`);
    }

    renderMenuItemLabels = ({menuItemsContext})=>{
        let category = this.getCategory();
        let menuItems = menuItemsContext.menuItems[category];
        let newLabels = [];
        let index = 0;

        if(menuItems === undefined){
            return "";
        }

        for(const key of Object.keys(menuItems)){

            index++;

            newLabels.push((
                <li key={index} className="menu-categories-list-item">
                    <MenuItemLabel index={index} menuItem={menuItems[key]}/>
                </li>
            ));
        };

        return newLabels;
    }

    render(){
        return (
            <section id="menu-categories-section">
                <h1>{Pluralize.plural(this.getCategory())}</h1>
                <ul id="menu-categories-list">
                    {this.renderMenuItemLabels(this.context)}
                </ul>
            </section>
        );
    };
};