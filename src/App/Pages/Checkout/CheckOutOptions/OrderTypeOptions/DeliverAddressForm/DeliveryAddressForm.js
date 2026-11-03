
import React from "react";
import "./DeliveryAddressForm.css";

export default class DeliveryAddressForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            customer_address: props.order.customer_address || "",
            customer_city: props.order.customer_city || "",
            customer_state: props.order.customer_state || "",
            customer_zip_code: props.order.customer_zip_code || "",
            saved: this.hasCompleteAddress(props.order),
            error: ""
        };
    }

    hasCompleteAddress = (order) => {
        return Boolean(
            order.customer_address &&
            order.customer_city &&
            order.customer_state &&
            order.customer_zip_code
        );
    };

    componentDidUpdate(prevProps) {
        const previousOrder = prevProps.order || {};
        const currentOrder = this.props.order || {};

        if (
            previousOrder.customer_address !== currentOrder.customer_address ||
            previousOrder.customer_city !== currentOrder.customer_city ||
            previousOrder.customer_state !== currentOrder.customer_state ||
            previousOrder.customer_zip_code !== currentOrder.customer_zip_code
        ) {
            this.setState({
                customer_address: currentOrder.customer_address || "",
                customer_city: currentOrder.customer_city || "",
                customer_state: currentOrder.customer_state || "",
                customer_zip_code: currentOrder.customer_zip_code || "",
                saved: this.hasCompleteAddress(currentOrder),
                error: ""
            });
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
            error: ""
        });
    };

    handleSave = (event) => {
        event.preventDefault();

        const address = this.state.customer_address.trim();
        const city = this.state.customer_city.trim();
        const state = this.state.customer_state.trim();
        const zipCode = this.state.customer_zip_code.trim();

        if (!address || !city || !state || !zipCode) {
            this.setState({
                error: "Please complete all delivery address fields."
            });

            return;
        }

        if (!/^\d{5}(-\d{4})?$/.test(zipCode)) {
            this.setState({
                error: "Please enter a valid ZIP code."
            });

            return;
        }

        this.props.updateOrder({
            customer_address: address,
            customer_city: city,
            customer_state: state,
            customer_zip_code: zipCode
        });

        this.setState({
            customer_address: address,
            customer_city: city,
            customer_state: state,
            customer_zip_code: zipCode,
            saved: true,
            error: ""
        });
    };

    handleEdit = () => {
        this.setState({
            saved: false,
            error: ""
        });
    };

    renderSavedAddress = () => {
        const {
            customer_address,
            customer_city,
            customer_state,
            customer_zip_code
        } = this.state;

        return (
            <div className="delivery-address-saved">
                <div className="delivery-address-saved-content">
                    <span className="delivery-address-saved-icon" aria-hidden="true">
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12l4 4L19 6" />
                        </svg>
                    </span>

                    <div>
                        <strong>Delivery Address Saved</strong>

                        <p>{customer_address}</p>

                        <p>
                            {customer_city}, {customer_state} {customer_zip_code}
                        </p>
                    </div>
                </div>

                <button
                    type="button"
                    className="delivery-address-edit-button"
                    onClick={this.handleEdit}
                >
                    Edit Address
                </button>
            </div>
        );
    };

    renderAddressForm = () => {
        const {
            customer_address,
            customer_city,
            customer_state,
            customer_zip_code,
            error
        } = this.state;

        return (
            <form
                className="delivery-address-form"
                onSubmit={this.handleSave}
            >
                <div className="delivery-address-heading">
                    <div className="delivery-address-heading-icon" aria-hidden="true">
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                            <circle cx="12" cy="10" r="2.5" />
                        </svg>
                    </div>

                    <div>
                        <h5>Delivery Address</h5>
                        <p>Where should we deliver your order?</p>
                    </div>
                </div>

                <div className="delivery-address-fields">
                    <div className="delivery-address-field delivery-address-field-full">
                        <label htmlFor="delivery-street">
                            Street Address <span>*</span>
                        </label>

                        <input
                            id="delivery-street"
                            type="text"
                            name="customer_address"
                            placeholder="123 Main Street, Apt 4B"
                            autoComplete="street-address"
                            value={customer_address}
                            onChange={this.handleChange}
                            maxLength={200}
                            required
                        />
                    </div>

                    <div className="delivery-address-field">
                        <label htmlFor="delivery-city">
                            City <span>*</span>
                        </label>

                        <input
                            id="delivery-city"
                            type="text"
                            name="customer_city"
                            placeholder="City"
                            autoComplete="address-level2"
                            value={customer_city}
                            onChange={this.handleChange}
                            maxLength={100}
                            required
                        />
                    </div>

                    <div className="delivery-address-field">
                        <label htmlFor="delivery-state">
                            State <span>*</span>
                        </label>

                        <input
                            id="delivery-state"
                            type="text"
                            name="customer_state"
                            placeholder="NY"
                            autoComplete="address-level1"
                            value={customer_state}
                            onChange={this.handleChange}
                            maxLength={50}
                            required
                        />
                    </div>

                    <div className="delivery-address-field delivery-address-field-full">
                        <label htmlFor="delivery-zip">
                            ZIP Code <span>*</span>
                        </label>

                        <input
                            id="delivery-zip"
                            type="text"
                            name="customer_zip_code"
                            placeholder="11701"
                            autoComplete="postal-code"
                            inputMode="numeric"
                            value={customer_zip_code}
                            onChange={this.handleChange}
                            maxLength={10}
                            required
                        />
                    </div>
                </div>

                {error && (
                    <p className="delivery-address-error" role="alert">
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    className="delivery-address-save-button"
                >
                    <span>Save Delivery Address</span>

                    <svg
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M5 12l4 4L19 6" />
                    </svg>
                </button>

                <p className="delivery-address-footnote">
                    Your address will be saved with your current order.
                </p>
            </form>
        );
    };

    render() {
        const { visible } = this.props;

        return (
            <div
                className={`delivery-address-panel ${visible ? "delivery-address-panel-open" : ""}`}
                aria-hidden={!visible}
                inert={!visible}
            >
                <div className="delivery-address-panel-inner">
                    {this.state.saved
                        ? this.renderSavedAddress()
                        : this.renderAddressForm()
                    }
                </div>
            </div>
        );
    }
}
