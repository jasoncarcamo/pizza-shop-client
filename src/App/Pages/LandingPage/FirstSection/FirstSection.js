import React from "react";
import "./FirstSection.css";

export default class FirstSection extends React.Component{
    goToMenu = ()=>{
        this.props.history.push("/menu/pizza")
    }

    render(){
        return (
            <section id="first-section">
                <div>
                    <h2>Pizza Shop</h2>

                    <button onClick={this.goToMenu}>View menu</button>
                </div>
            </section>
        )
    }
}