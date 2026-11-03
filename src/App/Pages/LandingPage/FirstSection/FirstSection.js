
import React from "react";
import { Link } from "react-router-dom";
import "./FirstSection.css";

export default class FirstSection extends React.Component {
    render() {
        return (
            <section
                id="first-section"
                aria-labelledby="first-section-title"
            >
                <div className="first-section-content">
                    <div className="first-section-eyebrow">
                        <span className="first-section-line"></span>
                        <span>WELCOME TO THE PIZZA SPOT</span>
                    </div>

                    <h1 id="first-section-title">
                        Great pizza.
                        <span>Good moments.</span>
                    </h1>

                    <p className="first-section-description">
                        The perfect slice is worth slowing down for.
                        Explore our menu and find something delicious
                        for your next pizza night.
                    </p>

                    <div className="first-section-actions">
                        <Link
                            to="/menu/pizza"
                            className="first-section-primary-btn"
                        >
                            Explore Our Menu
                            <span aria-hidden="true">→</span>
                        </Link>

                        <Link
                            to="/order"
                            className="first-section-secondary-btn"
                        >
                            Order Now
                        </Link>
                    </div>
                </div>

                <div className="first-section-bottom">
                    <span>THE PIZZA SPOT</span>
                    <span>MADE FOR PIZZA LOVERS</span>
                </div>
            </section>
        );
    }
}
