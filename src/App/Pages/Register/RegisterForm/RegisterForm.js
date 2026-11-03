
import React from "react";
import { Link } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import CustomerTokenService from "../../../../services/CustomerTokenService/CustomerTokenService";
import AuthRequest from "../../../../services/FetchRequests/AuthRequest";
import AppContext from "../../../../contexts/ContextContainer/AppContext/AppContext";
import "./RegisterForm.css";

export default class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: "",
            last_name: "",
            mobile_number: "",
            email: "",
            password: "",
            confirm_password: "",
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

    setCustomerContext = (customer) => {
        this.context.customerContext.setCustomer(customer);
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

    getPasswordRequirements = (password) => {
        return [
            {
                label: "At least 9 characters",
                valid: password.length >= 9
            },
            {
                label: "Fewer than 72 characters",
                valid: password.length < 72
            },
            {
                label: "No spaces at the beginning or end",
                valid: password.length > 0 &&
                    password === password.trim()
            },
            {
                label: "Uppercase and lowercase letters",
                valid: /[A-Z]/.test(password) &&
                    /[a-z]/.test(password)
            },
            {
                label: "At least one number",
                valid: /\d/.test(password)
            },
            {
                label: "At least one special character (!@#$%^&*)",
                valid: /[!@#$%^&*]/.test(password)
            },
            {
                label: "Only letters, numbers, and !@#$%^&*",
                valid: /^[a-zA-Z\d!@#$%^&*]+$/.test(password)
            }
        ];
    };

    checkRequirements = () => {
        const {
            first_name,
            last_name,
            mobile_number,
            email,
            password,
            confirm_password
        } = this.state;

        if (!first_name.trim()) {
            return "Please enter your first name.";
        }

        if (!last_name.trim()) {
            return "Please enter your last name.";
        }

        if (!mobile_number.trim()) {
            return "Please enter your mobile number.";
        }

        const phoneDigits = mobile_number.replace(/\D/g, "");

        if (
            phoneDigits.length !== 10 &&
            !(phoneDigits.length === 11 && phoneDigits.startsWith("1"))
        ) {
            return "Please enter a valid 10-digit US mobile number.";
        }

        if (!email.trim()) {
            return "Please enter your email address.";
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
            return "Please enter a valid email address.";
        }

        if (!password) {
            return "Please create a password.";
        }

        const requirements = this.getPasswordRequirements(password);

        if (requirements.some((requirement) => !requirement.valid)) {
            return "Your password does not meet all the requirements.";
        }

        if (!confirm_password) {
            return "Please confirm your password.";
        }

        if (password !== confirm_password) {
            return "Your passwords do not match.";
        }

        return "";
    };

    handleRegister = (event) => {
        event.preventDefault();

        if (this.state.loading) {
            return;
        }

        const error = this.checkRequirements();

        if (error) {
            this.setState({
                error
            });

            return;
        }

        const newCustomer = {
            first_name: this.state.first_name.trim(),
            last_name: this.state.last_name.trim(),
            mobile_number: this.state.mobile_number.trim(),
            email: this.state.email.trim(),
            password: this.state.password
        };

        this.setState({
            error: "",
            loading: true
        });

        AuthRequest.registerCustomer(newCustomer)
            .then((resData) => {
                const customer = resData.createdCustomer;

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
                    error: error.error || "Unable to create your account. Please try again.",
                    loading: false
                });
            });
    };

    renderPasswordRequirements = () => {
        const { password } = this.state;

        const requirements = this.getPasswordRequirements(password);

        return (
            <div
                className="register-password-requirements"
                aria-label="Password requirements"
            >
                <span className="register-requirements-title">
                    PASSWORD REQUIREMENTS
                </span>

                <ul className="password-validate">
                    {requirements.map((requirement, index) => (
                        <li
                            key={index}
                            className={
                                requirement.valid
                                    ? "register-requirement register-requirement--valid"
                                    : "register-requirement"
                            }
                        >
                            <span aria-hidden="true">
                                {requirement.valid ? "✓" : "○"}
                            </span>

                            {requirement.label}
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    render() {
        const {
            first_name,
            last_name,
            mobile_number,
            email,
            password,
            confirm_password,
            error,
            loading,
            showPassword
        } = this.state;

        const passwordsMatch = confirm_password.length > 0 &&
            password === confirm_password;

        return (
            <main id="register-page">
                <div className="register-page-container">
                    <div className="register-intro">
                        <span className="register-eyebrow">
                            JOIN THE PIZZA SPOT
                        </span>

                        <h1>
                            Your next favorite
                            <em> pizza awaits.</em>
                        </h1>

                        <p>
                            Create an account to make ordering
                            your favorites even easier.
                        </p>
                    </div>

                    <form
                        id="register-form"
                        onSubmit={this.handleRegister}
                        noValidate
                    >
                        <fieldset
                            id="register-fieldset"
                            disabled={loading}
                        >
                            <legend className="register-legend">
                                Create Your Account
                            </legend>

                            <div className="register-form-header">
                                <h2>Create an Account</h2>

                                <p>
                                    Already have an account?{" "}
                                    <Link to="/login">
                                        Log in
                                    </Link>
                                </p>
                            </div>

                            <div className="register-form-grid">
                                <div className="register-form-group">
                                    <label
                                        htmlFor="register-first-name"
                                        className="register-label"
                                    >
                                        First Name
                                    </label>

                                    <input
                                        id="register-first-name"
                                        className="register-input"
                                        type="text"
                                        name="first_name"
                                        value={first_name}
                                        onChange={this.handleInput}
                                        placeholder="First name"
                                        autoComplete="given-name"
                                        maxLength={80}
                                        required
                                    />
                                </div>

                                <div className="register-form-group">
                                    <label
                                        htmlFor="register-last-name"
                                        className="register-label"
                                    >
                                        Last Name
                                    </label>

                                    <input
                                        id="register-last-name"
                                        className="register-input"
                                        type="text"
                                        name="last_name"
                                        value={last_name}
                                        onChange={this.handleInput}
                                        placeholder="Last name"
                                        autoComplete="family-name"
                                        maxLength={80}
                                        required
                                    />
                                </div>

                                <div className="register-form-group register-form-group--full">
                                    <label
                                        htmlFor="register-mobile-number"
                                        className="register-label"
                                    >
                                        Mobile Number
                                    </label>

                                    <input
                                        id="register-mobile-number"
                                        className="register-input"
                                        type="tel"
                                        name="mobile_number"
                                        value={mobile_number}
                                        onChange={this.handleInput}
                                        placeholder="(555) 123-4567"
                                        autoComplete="tel"
                                        inputMode="tel"
                                        maxLength={20}
                                        required
                                    />
                                </div>

                                <div className="register-form-group register-form-group--full">
                                    <label
                                        htmlFor="register-email"
                                        className="register-label"
                                    >
                                        Email Address
                                    </label>

                                    <input
                                        id="register-email"
                                        className="register-input"
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

                                <div className="register-form-group register-form-group--full">
                                    <label
                                        htmlFor="register-password"
                                        className="register-label"
                                    >
                                        Password
                                    </label>

                                    <div className="register-password-wrapper">
                                        <input
                                            id="register-password"
                                            className="register-input"
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            value={password}
                                            onChange={this.handleInput}
                                            placeholder="Create a strong password"
                                            autoComplete="new-password"
                                            aria-describedby="register-password-help"
                                            required
                                        />

                                        <button
                                            type="button"
                                            className="register-password-toggle"
                                            onClick={this.togglePasswordVisibility}
                                            aria-label={
                                                showPassword
                                                    ? "Hide passwords"
                                                    : "Show passwords"
                                            }
                                            aria-pressed={showPassword}
                                        >
                                            {showPassword ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div id="register-password-help">
                                {this.renderPasswordRequirements()}
                            </div>

                            <div className="register-form-group">
                                <label
                                    htmlFor="register-confirm-password"
                                    className="register-label"
                                >
                                    Confirm Password
                                </label>

                                <input
                                    id="register-confirm-password"
                                    className="register-input"
                                    type={showPassword ? "text" : "password"}
                                    name="confirm_password"
                                    value={confirm_password}
                                    onChange={this.handleInput}
                                    placeholder="Re-enter your password"
                                    autoComplete="new-password"
                                    aria-describedby="register-confirm-status"
                                    required
                                />

                                <div
                                    id="register-confirm-status"
                                    className={
                                        confirm_password
                                            ? passwordsMatch
                                                ? "register-confirm-status register-confirm-status--valid"
                                                : "register-confirm-status register-confirm-status--invalid"
                                            : "register-confirm-status"
                                    }
                                    aria-live="polite"
                                >
                                    {confirm_password
                                        ? passwordsMatch
                                            ? "✓ Passwords match"
                                            : "Passwords do not match yet"
                                        : "Both passwords must match."}
                                </div>
                            </div>

                            {error && (
                                <div
                                    className="register-error"
                                    role="alert"
                                >
                                    <span aria-hidden="true">!</span>
                                    <p>{error}</p>
                                </div>
                            )}

                            <button
                                id="register-submit-btn"
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

                                        <span>Creating Account...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Create Account</span>
                                        <span aria-hidden="true">→</span>
                                    </>
                                )}
                            </button>

                            <p className="register-form-footer">
                                Your next great pizza experience
                                starts here.
                            </p>
                        </fieldset>
                    </form>

                    <p className="register-bottom-text">
                        THE PIZZA SPOT
                    </p>
                </div>
            </main>
        );
    }
}
