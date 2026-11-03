
import React from "react";
import { NavLink } from "react-router-dom";
import Pluralize from "pluralize";
import AppContext from "../../../../contexts/ContextContainer/AppContext/AppContext";
import "./MenuHeader.css";

export default class MenuHeader extends React.Component {
    static contextType = AppContext;

    renderMenuCategories = () => {
        const { menuItemsContext } = this.context;

        const menuItems = menuItemsContext.menuItems || {};

        return Object.keys(menuItems).map((category) => {
            const categoryPath = category.toLowerCase();

            return (
                <li
                    key={category}
                    className="menu-header-list-item"
                >
                    <NavLink
                        exact
                        to={`/menu/${categoryPath}`}
                        className="menu-header-link"
                        activeClassName="active-menu-item"
                    >
                        {Pluralize.plural(category)}
                    </NavLink>
                </li>
            );
        });
    };

    render() {
        return (
            <section
                id="menu-header-section"
                aria-label="Menu categories"
            >
                <div className="menu-header-container">
                    <div className="menu-header-intro">
                        <span className="menu-header-eyebrow">
                            MADE FRESH. SERVED WITH LOVE.
                        </span>

                        <h1>
                            Explore Our <em>Menu.</em>
                        </h1>

                        <p>
                            From handcrafted pizzas to classic
                            Italian favorites, find something
                            delicious for every craving.
                        </p>
                    </div>

                    <nav
                        className="menu-header-navigation"
                        aria-label="Browse food categories"
                    >
                        <ul id="menu-header-list">
                            {this.renderMenuCategories()}
                        </ul>
                    </nav>
                </div>
            </section>
        );
    }
}
