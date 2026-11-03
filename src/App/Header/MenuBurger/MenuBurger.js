
import React from "react";
import "./MenuBurger.css";

export default class MenuBurger extends React.Component {
    toggleMobileMenu = () => {
        if (this.props.toggleMobileMenu) {
            this.props.toggleMobileMenu();
        }
    };

    render() {
        const { isOpen = false } = this.props;

        return (
            <button
                id="nav-burger"
                className={`menu-burger ${isOpen ? "menu-burger--active" : ""}`}
                type="button"
                onClick={this.toggleMobileMenu}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
            >
                <span className="menu-burger-lines" aria-hidden="true">
                    <span className="menu-burger-line"></span>
                    <span className="menu-burger-line"></span>
                    <span className="menu-burger-line"></span>
                </span>
            </button>
        );
    }
}
