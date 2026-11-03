
import React from "react";
import { Link } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import AuthRequest from "../../../../services/FetchRequests/AuthRequest";
import AppContext from "../../../../contexts/ContextContainer/AppContext/AppContext";
import CustomerTokenService from "../../../../services/CustomerTokenService/CustomerTokenService";
import "./LogInForm.css";

export default class LogInForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error: "",
            loading: false,
            showPassword: false
        };
    }

    static contextType = AppContext;

    handleInput = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
            error: ""
        });
    };

    togglePasswordVisibility = () => {
        this.setState((previousState) => ({
            showPassword: !previousState.showPassword
        }));
    };

    setOrderContext = (customer) => {
        const ordersContext = this.context.ordersContext;
        const currentOrder = ordersContext.order || {};

        const updatedOrder = {
            ...currentOrder,
            customer_first_name: customer.first_name || "",
            customer_last_name: customer.last_name || "",
            customer_mobile_number: customer.mobile_number || "",
            customer_address: customer.address || "",
            customer_city: customer.city || "",
            customer_state: customer.state || "",
            customer_zip_code: customer.zip_code || "",
            customer_id: customer.id
        };

        ordersContext.updateOrder(updatedOrder);
    };

    setCustomerContext = (customer) => {
        this.context.customerContext.setCustomer(customer);
    };

    handleLogIn = (event) => {
        event.preventDefault();

        if (this.state.loading) {
            return;
        }

        const email = this.state.email.trim();
        const password = this.state.password;

        if (!email) {
            this.setState({
                error: "Please enter your email address."
            });

            return;
        }

        if (!password) {
            this.setState({
                error: "Please enter your password."
            });

            return;
        }

        const customerCredentials = {
            email,
            password
        };

        this.setState({
            loading: true,
            error: ""
        });

        AuthRequest.logInCustomer(customerCredentials)
            .then((resData) => {
                const customer = resData.customer;

                CustomerTokenService.setToken(resData.token);

                this.setCustomerContext(customer);
                this.setOrderContext(customer);

                this.setState({
                    loading: false
                });

                this.props.history.push("/menu/pizza");
            })
            .catch((error) => {
                this.setState({
                    error: error.error || "Unable to log in. Please try again.",
                    loading: false
                });
            });
    };

    render() {
        const {
            email,
            password,
            error,
            loading,
            showPassword
        } = this.state;

        return (
            <main id="log-in-page">
                <div className="log-in-page-container">
                    <div className="log-in-intro">
                        <span className="log-in-eyebrow">
                            WELCOME BACK
                        </span>

                        <h1>
                            Good to have
                            <em> you back.</em>
                        </h1>

                        <p>
                            Sign in to your account and get
                            back to something delicious.
                        </p>
                    </div>

                    <form
                        id="log-in-form"
                        onSubmit={this.handleLogIn}
                        noValidate
                    >
                        <fieldset
                            id="log-in-fieldset"
                            disabled={loading}
                        >
                            <legend className="log-in-legend">
                                Account Login
                            </legend>

                            <div className="log-in-form-header">
                                <h2>Log In</h2>

                                <p>
                                    New to The Pizza Spot?{" "}
                                    <Link to="/register">
                                        Create an account
                                    </Link>
                                </p>
                            </div>

                            <div className="log-in-form-group">
                                <label
                                    htmlFor="log-in-email"
                                    className="log-in-label"
                                >
                                    Email Address
                                </label>

                                <input
                                    id="log-in-email"
                                    className="log-in-input"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={this.handleInput}
                                    placeholder="you@example.com"
                                    autoComplete="email"
                                    autoCapitalize="none"
                                    spellCheck={false}
                                    required
                                />
                            </div>

                            <div className="log-in-form-group">
                                <label
                                    htmlFor="log-in-password"
                                    className="log-in-label"
                                >
                                    Password
                                </label>

                                <div className="log-in-password-wrapper">
                                    <input
                                        id="log-in-password"
                                        className="log-in-input"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={password}
                                        onChange={this.handleInput}
                                        placeholder="Enter your password"
                                        autoComplete="current-password"
                                        required
                                    />

                                    <button
                                        type="button"
                                        className="log-in-password-toggle"
                                        onClick={this.togglePasswordVisibility}
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                        aria-pressed={showPassword}
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>

                            {error && (
                                <div
                                    className="log-in-error"
                                    role="alert"
                                >
                                    <span aria-hidden="true">!</span>
                                    <p>{error}</p>
                                </div>
                            )}

                            <button
                                id="log-in-submit-btn"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <BounceLoader
                                            loading={true}
                                            color="#1b1512"
                                            size={20}
                                        />

                                        <span>Signing In...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Log In</span>
                                        <span aria-hidden="true">→</span>
                                    </>
                                )}
                            </button>

                            <p className="log-in-form-footer">
                                Your next favorite pizza is just
                                a few clicks away.
                            </p>
                        </fieldset>
                    </form>

                    <p className="log-in-bottom-text">
                        THE PIZZA SPOT
                    </p>
                </div>
            </main>
        );
    }
}
