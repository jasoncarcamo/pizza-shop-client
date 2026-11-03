
import React from "react";
import AppContext from "../../../../../contexts/ContextContainer/AppContext/AppContext";
import "./DeliveryForm.css";

export default class DeliveryForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            customer_first_name: "",
            customer_last_name: "",
            customer_mobile_number: "",
            customer_address: "",
            customer_city: "",
            customer_state: "NY",
            customer_zip_code: "",
            error: ""
        };
    }

    static contextType = AppContext;

    componentDidMount() {
        const order = this.context.ordersContext.order || {};

        this.setState({
            customer_first_name: order.customer_first_name || "",
            customer_last_name: order.customer_last_name || "",
            customer_mobile_number: order.customer_mobile_number || "",
            customer_address: order.customer_address || "",
            customer_city: order.customer_city || "",
            customer_state: order.customer_state || "NY",
            customer_zip_code: order.customer_zip_code || ""
        });
    }

    handleInput = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
            error: ""
        });

        this.updateOrder(name, value);
    };

    updateOrder = (name, value) => {
        const ordersContext = this.context.ordersContext;
        const currentOrder = ordersContext.order || {};

        const updatedOrder = {
            ...currentOrder,
            [name]: value
        };

        ordersContext.updateOrder(updatedOrder);
    };

    checkRequirements = () => {
        const fields = [
            {
                name: "customer_first_name",
                label: "first name"
            },
            {
                name: "customer_last_name",
                label: "last name"
            },
            {
                name: "customer_mobile_number",
                label: "mobile number"
            },
            {
                name: "customer_address",
                label: "street address"
            },
            {
                name: "customer_city",
                label: "city"
            },
            {
                name: "customer_state",
                label: "state"
            },
            {
                name: "customer_zip_code",
                label: "ZIP code"
            }
        ];

        for (const field of fields) {
            const value = String(this.state[field.name] || "").trim();

            if (!value) {
                return `Please enter your ${field.label}.`;
            }
        }

        const phoneDigits = this.state.customer_mobile_number.replace(/\D/g, "");

        if (
            phoneDigits.length !== 10 &&
            !(phoneDigits.length === 11 && phoneDigits.startsWith("1"))
        ) {
            return "Please enter a valid 10-digit US mobile number.";
        }

        const zipCode = this.state.customer_zip_code.trim();

        if (!/^\d{5}(-\d{4})?$/.test(zipCode)) {
            return "Please enter a valid US ZIP code.";
        }

        const state = this.state.customer_state.trim();

        if (!/^[a-zA-Z]{2}$/.test(state)) {
            return "Please enter a valid two-letter state abbreviation.";
        }

        return "";
    };

    handleStartOrdering = (event) => {
        event.preventDefault();

        const error = this.checkRequirements();

        if (error) {
            this.setState({
                error
            });

            return;
        }

        const ordersContext = this.context.ordersContext;

        const updatedOrder = {
            ...(ordersContext.order || {}),
            customer_first_name: this.state.customer_first_name.trim(),
            customer_last_name: this.state.customer_last_name.trim(),
            customer_mobile_number: this.state.customer_mobile_number.trim(),
            customer_address: this.state.customer_address.trim(),
            customer_city: this.state.customer_city.trim(),
            customer_state: this.state.customer_state.trim().toUpperCase(),
            customer_zip_code: this.state.customer_zip_code.trim()
        };

        ordersContext.updateOrder(updatedOrder);
        ordersContext.startOrder("Delivery");

        this.props.history.push("/menu/pizza");
    };

    handleCancel = () => {
        this.context.ordersContext.deleteOrder();

        this.props.setDefaultOrderType();
    };

    render() {
        const {
            customer_first_name,
            customer_last_name,
            customer_mobile_number,
            customer_address,
            customer_city,
            customer_state,
            customer_zip_code,
            error
        } = this.state;

        return (
            <form
                id="delivery-form"
                onSubmit={this.handleStartOrdering}
                noValidate
            >
                <fieldset id="delivery-fieldset">
                    <legend className="delivery-fieldset-legend">
                        Your contact information
                    </legend>

                    <p className="delivery-form-intro">
                        Tell us who we're delivering to and where
                        your order should go.
                    </p>

                    <div className="delivery-form-grid">
                        <div className="delivery-form-group">
                            <label
                                htmlFor="delivery-first-name"
                                className="delivery-label"
                            >
                                First Name
                                <span aria-hidden="true"> *</span>
                            </label>

                            <input
                                id="delivery-first-name"
                                className="delivery-input"
                                type="text"
                                name="customer_first_name"
                                value={customer_first_name}
                                onChange={this.handleInput}
                                placeholder="Enter your first name"
                                autoComplete="given-name"
                                maxLength={80}
                                required
                            />
                        </div>

                        <div className="delivery-form-group">
                            <label
                                htmlFor="delivery-last-name"
                                className="delivery-label"
                            >
                                Last Name
                                <span aria-hidden="true"> *</span>
                            </label>

                            <input
                                id="delivery-last-name"
                                className="delivery-input"
                                type="text"
                                name="customer_last_name"
                                value={customer_last_name}
                                onChange={this.handleInput}
                                placeholder="Enter your last name"
                                autoComplete="family-name"
                                maxLength={80}
                                required
                            />
                        </div>

                        <div className="delivery-form-group delivery-form-group--full">
                            <label
                                htmlFor="delivery-mobile-number"
                                className="delivery-label"
                            >
                                Mobile Number
                                <span aria-hidden="true"> *</span>
                            </label>

                            <input
                                id="delivery-mobile-number"
                                className="delivery-input"
                                type="tel"
                                name="customer_mobile_number"
                                value={customer_mobile_number}
                                onChange={this.handleInput}
                                placeholder="(555) 123-4567"
                                autoComplete="tel"
                                inputMode="tel"
                                maxLength={20}
                                required
                            />
                        </div>
                    </div>

                    <div className="delivery-form-divider">
                        <span>DELIVERY ADDRESS</span>
                    </div>

                    <div className="delivery-form-grid">
                        <div className="delivery-form-group delivery-form-group--full">
                            <label
                                htmlFor="delivery-address"
                                className="delivery-label"
                            >
                                Street Address
                                <span aria-hidden="true"> *</span>
                            </label>

                            <input
                                id="delivery-address"
                                className="delivery-input"
                                type="text"
                                name="customer_address"
                                value={customer_address}
                                onChange={this.handleInput}
                                placeholder="Street address and apartment, if applicable"
                                autoComplete="street-address"
                                maxLength={200}
                                required
                            />
                        </div>

                        <div className="delivery-form-group delivery-form-group--full">
                            <label
                                htmlFor="delivery-city"
                                className="delivery-label"
                            >
                                City
                                <span aria-hidden="true"> *</span>
                            </label>

                            <input
                                id="delivery-city"
                                className="delivery-input"
                                type="text"
                                name="customer_city"
                                value={customer_city}
                                onChange={this.handleInput}
                                placeholder="Enter your city"
                                autoComplete="address-level2"
                                maxLength={100}
                                required
                            />
                        </div>

                        <div className="delivery-form-group">
                            <label
                                htmlFor="delivery-state"
                                className="delivery-label"
                            >
                                State
                                <span aria-hidden="true"> *</span>
                            </label>

                            <input
                                id="delivery-state"
                                className="delivery-input"
                                type="text"
                                name="customer_state"
                                value={customer_state}
                                onChange={this.handleInput}
                                placeholder="NY"
                                autoComplete="address-level1"
                                maxLength={2}
                                required
                            />
                        </div>

                        <div className="delivery-form-group">
                            <label
                                htmlFor="delivery-zip-code"
                                className="delivery-label"
                            >
                                ZIP Code
                                <span aria-hidden="true"> *</span>
                            </label>

                            <input
                                id="delivery-zip-code"
                                className="delivery-input"
                                type="text"
                                name="customer_zip_code"
                                value={customer_zip_code}
                                onChange={this.handleInput}
                                placeholder="11701"
                                autoComplete="postal-code"
                                inputMode="numeric"
                                maxLength={10}
                                required
                            />
                        </div>
                    </div>

                    {error && (
                        <div
                            className="delivery-form-error"
                            role="alert"
                        >
                            <span aria-hidden="true">!</span>
                            <p>{error}</p>
                        </div>
                    )}

                    <div className="delivery-form-actions">
                        <button
                            type="submit"
                            className="delivery-btn delivery-btn--primary"
                        >
                            <span>Continue to Menu</span>
                            <span aria-hidden="true">→</span>
                        </button>

                        <button
                            type="button"
                            className="delivery-btn delivery-btn--secondary"
                            onClick={this.handleCancel}
                        >
                            Back to Order Options
                        </button>
                    </div>

                    <p className="delivery-form-footer">
                        Required fields are marked with an asterisk (*).
                    </p>
                </fieldset>
            </form>
        );
    }
}
