import React from "react";
import {Route} from "react-router-dom";
import MenuHeader from "./MenuHeader/MenuHeader";
import MenuCategories from "./MenuCategories/MenuCategories";
import MenuItems from "./MenuCategories/MenuItems/MenuItems";

export default class Menu extends React.Component{
    render(){
        return (
            <section id="menu-section">
                <Route path="/menu" component={MenuHeader}></Route>
                <Route exact path="/menu/:category" component={MenuCategories}></Route>
            </section>
        );
    };
}