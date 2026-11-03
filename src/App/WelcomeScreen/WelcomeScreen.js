
import React from "react";
import "./WelcomeScreen.css";
import WelcomeImg from "./pizza-welcome.jpeg";

export default class WelcomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            close: false
        };

        this.previousBodyOverflow = "";
    }

    componentDidMount() {
        this.previousBodyOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
    }

    componentWillUnmount() {
        document.body.style.overflow = this.previousBodyOverflow;
    }

    closeWelcome = () => {
        document.body.style.overflow = this.previousBodyOverflow;

        this.setState({
            close: true
        });
    };

    render() {
        const { close } = this.state;

        if (close) {
            return null;
        }

        return (
            <section
                id="welcome-screen-section"
                role="dialog"
                aria-modal="true"
                aria-labelledby="welcome-title"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            90deg,
                            rgba(17, 13, 11, 0.88) 0%,
                            rgba(17, 13, 11, 0.62) 55%,
                            rgba(17, 13, 11, 0.35) 100%
                        ),
                        url("${WelcomeImg}")
                    `
                }}
            >
                <div className="welcome-content">
                    <div className="welcome-brand">
                        <span className="welcome-brand-line"></span>
                        <span>THE PIZZA SPOT</span>
                    </div>

                    <p className="welcome-eyebrow">
                        FRESHLY MADE. ALWAYS DELICIOUS.
                    </p>

                    <h1
                        id="welcome-title"
                        className="welcome-msg-header"
                    >
                        A little slice
                        <span>of something special.</span>
                    </h1>

                    <p className="welcome-description">
                        Welcome to The Pizza Spot, where great
                        pizza and good company come together.
                    </p>

                    <button
                        id="welcome-enter-btn"
                        type="button"
                        onClick={this.closeWelcome}
                    >
                        <span>Explore The Pizza Spot</span>
                        <span aria-hidden="true">→</span>
                    </button>

                    <p className="welcome-footer-note">
                        MADE WITH PASSION. SERVED WITH LOVE.
                    </p>
                </div>

                <div
                    className="welcome-side-label"
                    aria-hidden="true"
                >
                    GOOD FOOD. GOOD MOMENTS.
                </div>
            </section>
        );
    }
}
