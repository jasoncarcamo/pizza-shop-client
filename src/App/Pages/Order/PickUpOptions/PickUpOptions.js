
import React from "react";
import { Link } from "react-router-dom";
import PickUpForm from "./PickUpForm/PickUpForm";
import CustomerTokenService from "../../../../services/CustomerTokenService/CustomerTokenService";
import "./PickUpOptions.css";

export default class PickUpOptions extends React.Component {
    renderMemberMessage = () => {
        return (
            <div className="pickup-member-message">
                <span className="pickup-member-icon" aria-hidden="true">
                    ✓
                </span>

                <p>
                    Already have an account?{" "}
                    <Link to="/login">
                        Log in
                    </Link>{" "}
                    to use your saved information.
                </p>
            </div>
        );
    };

    renderRegisterMessage = () => {
        return (
            <p className="pickup-register-message">
                New to The Pizza Spot?{" "}
                <Link to="/signup">
                    Create an account
                </Link>
            </p>
        );
    };

    render() {
        const isLoggedIn = CustomerTokenService.hasToken();

        return (
            <section
                id="pickup-options-section"
                aria-labelledby="pickup-options-title"
            >
                <div className="pickup-options-container">
                    <div className="pickup-options-heading">
                        <span className="pickup-options-eyebrow">
                            YOUR ORDER / PICKUP
                        </span>

                        <h1 id="pickup-options-title">
                            Let's get your
                            <em> pickup ready.</em>
                        </h1>

                        <p className="pickup-options-description">
                            Enter your pickup details below to
                            continue with your order.
                        </p>
                    </div>

                    <div className="pickup-options-card">
                        <div className="pickup-options-card-header">
                            <div>
                                <span className="pickup-step-label">
                                    STEP 01
                                </span>

                                <h2>Pickup Details</h2>
                            </div>

                            <span className="pickup-type-badge">
                                Pickup
                            </span>
                        </div>

                        {!isLoggedIn && this.renderMemberMessage()}

                        <div className="pickup-form-container">
                            <PickUpForm
                                setDefaultOrderType={
                                    this.props.setDefaultOrderType
                                }
                                history={this.props.history}
                                handleCancel={this.props.handleCancel}
                            />
                        </div>

                        {!isLoggedIn && this.renderRegisterMessage()}
                    </div>

                    <p className="pickup-options-footer">
                        THE PIZZA SPOT
                    </p>
                </div>
            </section>
        );
    }
}
