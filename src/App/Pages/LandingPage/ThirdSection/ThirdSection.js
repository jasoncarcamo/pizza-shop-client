import React from "react";
import "./ThirdSection.css";

export default class ThirdSection extends React.Component{
    render(){
        return (
            <section id="third-section">
                <div>
                    <button onClick={this.seeMenu}>Order Now</button>
                </div>
            </section>
        );
    }
}