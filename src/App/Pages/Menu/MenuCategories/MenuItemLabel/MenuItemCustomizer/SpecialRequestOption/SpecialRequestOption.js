
import React from "react";
import "./SpecialRequestOption.css";

export default class SpecialRequestOption extends React.Component {
    constructor(props) {
        super(props);

        this.maxCharacters = 250;
        this.inputId = `special-request-${props.orderItem.id}`;
    }

    handleSpecialRequest = (event) => {
        const specialRequest = event.target.value;

        if (specialRequest.length > this.maxCharacters) {
            return;
        }

        this.props.updateOrderItem({
            ...this.props.orderItem,
            special_request: specialRequest
        });
    };

    render() {
        const specialRequest = this.props.orderItem.special_request || "";

        return (
            <section
                className="special-request-section"
                aria-labelledby={`${this.inputId}-heading`}
            >
                <div className="special-request-heading">
                    <div>
                        <h3
                            id={`${this.inputId}-heading`}
                            className="special-request-title"
                        >
                            Special Instructions
                        </h3>

                        <p className="special-request-description">
                            Have a preference? Let us know how you'd
                            like your order prepared.
                        </p>
                    </div>

                    <span className="special-request-optional">
                        OPTIONAL
                    </span>
                </div>

                <label
                    className="special-request-label"
                    htmlFor={this.inputId}
                >
                    Add a note for the kitchen
                </label>

                <textarea
                    className="special-request-input"
                    id={this.inputId}
                    name="special_request"
                    value={specialRequest}
                    onChange={this.handleSpecialRequest}
                    placeholder="e.g. Extra crispy, light sauce, or no onions..."
                    maxLength={this.maxCharacters}
                    rows={4}
                    aria-describedby={`${this.inputId}-help`}
                />

                <div className="special-request-footer">
                    <span id={`${this.inputId}-help`}>
                        We'll do our best to accommodate your request.
                    </span>

                    <span className="special-request-counter">
                        {specialRequest.length}/{this.maxCharacters}
                    </span>
                </div>
            </section>
        );
    }
}
