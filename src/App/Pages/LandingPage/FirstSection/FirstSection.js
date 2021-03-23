import React from "react";
import "./FirstSection.css";

export default class FirstSection extends React.Component{
    render(){
        return (
            <section id="first-section">
                <div>
                    <h2>Pizza Shop</h2>

                    <button onClick={this.seeMenu}>View menu</button>
                </div>
            </section>
        )
    }
}