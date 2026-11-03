
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import MenuHeader from "./MenuHeader/MenuHeader";
import MenuCategories from "./MenuCategories/MenuCategories";
import "./Menu.css";

export default class Menu extends React.Component {
    render() {
        return (
            <main id="menu-section">
                <div className="menu-page-container">
                    <Route
                        path="/menu"
                        component={MenuHeader}
                    />

                    <Switch>
                        <Route
                            exact
                            path="/menu"
                            render={() => (
                                <Redirect to="/menu/pizza" />
                            )}
                        />

                        <Route
                            exact
                            path="/menu/:category"
                            component={MenuCategories}
                        />
                    </Switch>
                </div>
            </main>
        );
    }
}
