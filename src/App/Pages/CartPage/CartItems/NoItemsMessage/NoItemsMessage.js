
import React from "react";
import "./NoItemsMessage.css";

export default class NoItemsMessage extends React.Component {
    handleStartOrder = () => {
        this.props.history.push("/menu/pizza");
    };

    render() {
        return (
            <section
                id="no-items-section"
                aria-labelledby="no-items-title"
            >
                <div className="no-items-container">
                    <div className="no-items-illustration">
                        <div className="no-items-illustration-glow"></div>

                        <div className="no-items-icon-wrapper">
                            <svg
                                width="76"
                                height="76"
                                viewBox="0 0 80 80"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    d="M15 29H65L60 67H20L15 29Z"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinejoin="round"
                                />

                                <path
                                    d="M28 30V23C28 16.3726 33.3726 11 40 11C46.6274 11 52 16.3726 52 23V30"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                />

                                <path
                                    d="M30 47H50"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    opacity="0.6"
                                />

                                <path
                                    d="M34 54H46"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    opacity="0.6"
                                />
                            </svg>
                        </div>

                        <span className="no-items-decoration no-items-decoration-one"></span>
                        <span className="no-items-decoration no-items-decoration-two"></span>
                        <span className="no-items-decoration no-items-decoration-three"></span>
                    </div>

                    <div className="no-items-content">
                        <span className="no-items-eyebrow">
                            YOUR CART
                        </span>

                        <h2 id="no-items-title">
                            Your Cart Is <em>Empty</em>
                        </h2>

                        <div className="no-items-divider" aria-hidden="true">
                            <span></span>
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            >
                                <path d="M12 3L14.8 9.2L21 12L14.8 14.8L12 21L9.2 14.8L3 12L9.2 9.2L12 3Z" />
                            </svg>
                            <span></span>
                        </div>

                        <p className="no-items-description">
                            Something delicious is waiting for you.
                            Explore our menu and discover your next favorite meal,
                            freshly prepared with care.
                        </p>

                        <button
                            type="button"
                            className="no-items-start-button"
                            onClick={this.handleStartOrder}
                        >
                            <span>Explore Our Menu</span>

                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M5 12H19" />
                                <path d="M12 5L19 12L12 19" />
                            </svg>
                        </button>

                        <p className="no-items-footer">
                            Fresh ingredients. Made with love. Always delicious.
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}
