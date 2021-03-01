import React from "react";
import "./LandingPage.css";

export default class LandingPage extends React.Component{

    seeMenu = ()=>{
        this.props.history.push("/menu");
    }

    render(){
        return (
            <section id="landing-page-section">
                <section id="first-section">
                    <div>
                        <h2>Pizza Shop</h2>

                        <button onClick={this.seeMenu}>View menu</button>
                    </div>
                </section>

                <section id="second-section">
                    <div>
                        <p>Sharing is always fun!</p>
                    </div>
                </section>
            </section>
        );
    };  
}