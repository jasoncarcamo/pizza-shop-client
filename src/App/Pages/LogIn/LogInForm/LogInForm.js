import React from "react";

export default class LogInForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        }
    }

    handleInput = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        return (
            <form>
                <fieldset>
                    <legend></legend>

                    <label htmlFor="log-in-email" className="log-in-label">
                        <input id="log-in-email" className="log-in-input" type="email" name="email" value={this.state.email} onChange={this.handleInput}/>
                    </label>

                    <label htmlFor="log-in-password" className="log-in-label">
                        <input id="log-in-password" className="log-in-input" type="password" name="password" value={this.state.password} onChange={this.handleInput}/>
                    </label>

                    <button id="log-in-submit-btn">Log In</button>
                </fieldset>
            </form>
        );
    };
}