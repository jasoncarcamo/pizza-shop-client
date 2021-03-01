import React from "react";
import {Route} from "react-router-dom";
import MenuHeader from "./MenuHeader/MenuHeader";
import MenuCategories from "./MenuCategories/MenuCategories";
import AppContext from "../../../contexts/ContextContainer/AppContext/AppContext";

export default class Menu extends React.Component{

    static contextType = AppContext;

    componentDidMount(){
        if(!this.context.ordersContext.order.order_started){
            this.props.history.push("/order");
        }
    }

    componentDidUpdate(){
        
    }

    render(){
        return (
            <section id="menu-section">
                <Route path="/menu" component={MenuHeader}></Route>
                <Route exact path="/menu/:category" component={MenuCategories}></Route>
            </section>
        );
    };
}