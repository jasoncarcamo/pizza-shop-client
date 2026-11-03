
import React from "react";
import { Link } from "react-router-dom";
import DeliveryForm from "./DeliveryForm/DeliveryForm";
import CustomerTokenService from "../../../../services/CustomerTokenService/CustomerTokenService";
import "./DeliveryOptions.css";

export default class DeliveryOptions extends React.Component {
    handleCancel = (event) => {
        this.props.startOrder(event);
    };

    renderMemberMessage = () => {
        return (
            <div className="delivery-member-message">
                <span className="delivery-member-icon" aria-hidden="true">
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
            <p className="delivery-register-message">
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
                id="delivery-options-section"
                aria-labelledby="delivery-options-title"
            >
                <div className="delivery-options-container">
                    <div className="delivery-options-heading">
                        <span className="delivery-options-eyebrow">
                            YOUR ORDER / DELIVERY
                        </span>

                        <h1 id="delivery-options-title">
                            Delicious pizza,
                            <em> delivered to you.</em>
                        </h1>

                        <p className="delivery-options-description">
                            Enter your delivery details below
                            to get started with your order.
                        </p>
                    </div>

                    <div className="delivery-options-card">
                        <div className="delivery-options-card-header">
                            <div>
                                <span className="delivery-step-label">
                                    STEP 01
                                </span>

                                <h2>Delivery Details</h2>
                            </div>

                            <span className="delivery-type-badge">
                                Delivery
                            </span>
                        </div>

                        {!isLoggedIn && this.renderMemberMessage()}

                        <div className="delivery-form-container">
                            <DeliveryForm
                                setDefaultOrderType={
                                    this.props.setDefaultOrderType
                                }
                                history={this.props.history}
                                handleCancel={this.handleCancel}
                            />
                        </div>

                        {!isLoggedIn && this.renderRegisterMessage()}
                    </div>

                    <p className="delivery-options-footer">
                        THE PIZZA SPOT
                    </p>
                </div>
            </section>
        );
    }
}
