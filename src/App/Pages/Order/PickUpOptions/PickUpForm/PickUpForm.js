
import React from "react";
import AppContext from "../../../../../contexts/ContextContainer/AppContext/AppContext";
import "./PickUpForm.css";

export default class PickUpForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            customer_first_name: "",
            customer_last_name: "",
            customer_mobile_number: "",
            error: ""
        };
    }

    static contextType = AppContext;

    componentDidMount() {
        const order = this.context.ordersContext.order || {};

        this.setState({
            customer_first_name: order.customer_first_name || "",
            customer_last_name: order.customer_last_name || "",
            customer_mobile_number: order.customer_mobile_number || ""
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
        console.log(updatedOrder)
        ordersContext.updateOrder(updatedOrder);
    };

    checkRequirements = () => {
        const {
            customer_first_name,
            customer_last_name,
            customer_mobile_number
        } = this.state;

        if (!customer_first_name.trim()) {
            return "Please enter your first name.";
        }

        if (!customer_last_name.trim()) {
            return "Please enter your last name.";
        }

        if (!customer_mobile_number.trim()) {
            return "Please enter your mobile number.";
        }

        const phoneDigits = customer_mobile_number.replace(/\D/g, "");

        if (
            phoneDigits.length !== 10 &&
            !(phoneDigits.length === 11 && phoneDigits.startsWith("1"))
        ) {
            return "Please enter a valid 10-digit US mobile number.";
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

        this.context.ordersContext.startOrder("Pick up");

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
            error
        } = this.state;

        return (
            <form
                id="pickup-form"
                onSubmit={this.handleStartOrdering}
                noValidate
            >
                <fieldset id="pickup-fieldset">
                    <legend className="pickup-fieldset-legend">
                        Your contact information
                    </legend>

                    <p className="pickup-form-intro">
                        We'll use these details to identify your
                        pickup order.
                    </p>

                    <div className="pickup-form-grid">
                        <div className="pickup-form-group">
                            <label
                                htmlFor="pickup-first-name"
                                className="pickup-label"
                            >
                                First Name
                                <span aria-hidden="true"> *</span>
                            </label>

                            <input
                                id="pickup-first-name"
                                className="pickup-input"
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

                        <div className="pickup-form-group">
                            <label
                                htmlFor="pickup-last-name"
                                className="pickup-label"
                            >
                                Last Name
                                <span aria-hidden="true"> *</span>
                            </label>

                            <input
                                id="pickup-last-name"
                                className="pickup-input"
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

                        <div className="pickup-form-group pickup-form-group--full">
                            <label
                                htmlFor="pickup-mobile-number"
                                className="pickup-label"
                            >
                                Mobile Number
                                <span aria-hidden="true"> *</span>
                            </label>

                            <input
                                id="pickup-mobile-number"
                                className="pickup-input"
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

                            <span className="pickup-input-hint">
                                Enter a US phone number with area code.
                            </span>
                        </div>
                    </div>

                    {error && (
                        <div
                            className="pickup-form-error"
                            role="alert"
                        >
                            <span aria-hidden="true">!</span>
                            <p>{error}</p>
                        </div>
                    )}

                    <div className="pickup-form-actions">
                        <button
                            type="submit"
                            className="pickup-btn pickup-btn--primary"
                        >
                            <span>Continue to Menu</span>
                            <span aria-hidden="true">→</span>
                        </button>

                        <button
                            type="button"
                            className="pickup-btn pickup-btn--secondary"
                            onClick={this.handleCancel}
                        >
                            Back to Order Options
                        </button>
                    </div>

                    <p className="pickup-form-footer">
                        Required fields are marked with an asterisk (*).
                    </p>
                </fieldset>
            </form>
        );
    }
}
