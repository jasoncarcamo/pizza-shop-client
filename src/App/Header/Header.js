
import React from "react";
import { NavLink, Link } from "react-router-dom";

import Cart from "./Cart/Cart";
import AuthOptions from "./AuthOptions/AuthOptions";
import MenuBurger from "./MenuBurger/MenuBurger";

import "./Header.css";

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMenuOpen: false,
            isScrolled: false
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll, {
            passive: true
        });

        this.handleScroll();
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.location.pathname !==
            this.props.location.pathname
        ) {
            window.scrollTo(0, 0);

            if (this.state.isMenuOpen) {
                this.setState({
                    isMenuOpen: false
                });
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const isScrolled = window.scrollY > 20;

        if (this.state.isScrolled !== isScrolled) {
            this.setState({
                isScrolled
            });
        }
    };

    toggleMobileMenu = () => {
        this.setState((prevState) => ({
            isMenuOpen: !prevState.isMenuOpen
        }));
    };

    closeMobileMenu = () => {
        if (this.state.isMenuOpen) {
            this.setState({
                isMenuOpen: false
            });
        }
    };

    render() {
        const { isMenuOpen, isScrolled } = this.state;

        return (
            <header
                id="nav-header"
                className={
                    isScrolled
                        ? "nav-header--scrolled"
                        : ""
                }
            >
                <nav
                    id="nav-container"
                    aria-label="Main navigation"
                >
                    <Link
                        id="nav-logo"
                        to="/"
                        onClick={this.closeMobileMenu}
                        aria-label="The Pizza Spot - Home"
                    >
                        <span className="nav-logo-mark" aria-hidden="true">
                            P
                        </span>

                        <span className="nav-logo-text">
                            <span>The Pizza</span>
                            <strong>Spot.</strong>
                        </span>
                    </Link>

                    <div className="nav-mobile-actions">
                        <MenuBurger
                            toggleMobileMenu={this.toggleMobileMenu}
                        />
                    </div>

                    <ul
                        id="nav-links-container"
                        className={
                            isMenuOpen
                                ? "show-links-container"
                                : ""
                        }
                    >
                        <li className="nav-link-list">
                            <NavLink
                                exact
                                to="/"
                                onClick={this.closeMobileMenu}
                                activeClassName="active-link"
                                className="nav-link"
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-link-list">
                            <NavLink
                                to="/menu/pizza"
                                onClick={this.closeMobileMenu}
                                activeClassName="active-link"
                                className="nav-link"
                            >
                                Menu
                            </NavLink>
                        </li>

                        <li className="nav-link-list">
                            <NavLink
                                to="/order"
                                onClick={this.closeMobileMenu}
                                activeClassName="active-link"
                                className="nav-link"
                            >
                                Order
                            </NavLink>
                        </li>

                        <li className="nav-link-list">
                            <NavLink
                                to="/about"
                                onClick={this.closeMobileMenu}
                                activeClassName="active-link"
                                className="nav-link"
                            >
                                About
                            </NavLink>
                        </li>

                        <AuthOptions
                            toggleMobileMenu={this.closeMobileMenu}
                            history={this.props.history}
                        />

                        <li className="nav-link-list nav-call-item">
                            <a
                                className="call-btn"
                                href="tel:9999999999"
                            >
                                Call Us
                            </a>
                        </li>

                        <li className="nav-link-list nav-cart-item">
                            <Cart
                                history={this.props.history}
                                toggleMobileMenu={this.closeMobileMenu}
                            />
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}
