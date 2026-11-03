
import React from "react";
import { Link } from "react-router-dom";
import "./ThirdSection.css";

export default class ThirdSection extends React.Component {
    render() {
        return (
            <section
                id="third-section"
                aria-labelledby="third-section-title"
            >
                <div className="third-section-container">
                    <div className="third-section-heading">
                        <span className="third-section-eyebrow">
                            SOMETHING DELICIOUS AWAITS
                        </span>

                        <h2 id="third-section-title">
                            Your next favorite
                            <em> slice starts here.</em>
                        </h2>

                        <p>
                            Explore our menu or get started
                            with your next order.
                        </p>
                    </div>

                    <div id="third-section-box-container">
                        <Link
                            to="/menu/pizza"
                            className="third-section-box third-section-box--menu"
                        >
                            <span className="third-section-card-number">
                                01 / EXPLORE
                            </span>

                            <div className="third-section-card-content">
                                <span className="third-section-card-eyebrow">
                                    FIND YOUR FAVORITE
                                </span>

                                <h3>Explore Our Menu</h3>

                                <p>
                                    Discover something delicious.
                                </p>

                                <span className="third-section-card-action">
                                    View Menu
                                    <span aria-hidden="true">→</span>
                                </span>
                            </div>
                        </Link>

                        <Link
                            to="/order"
                            className="third-section-box third-section-box--order"
                        >
                            <span className="third-section-card-number">
                                02 / ORDER
                            </span>

                            <div className="third-section-card-content">
                                <span className="third-section-card-eyebrow">
                                    READY WHEN YOU ARE
                                </span>

                                <h3>Order Takeout</h3>

                                <p>
                                    Make your next pizza night easy.
                                </p>

                                <span className="third-section-card-action">
                                    Start Your Order
                                    <span aria-hidden="true">→</span>
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}
