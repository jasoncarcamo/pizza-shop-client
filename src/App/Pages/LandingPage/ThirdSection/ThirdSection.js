import React from "react";
import "./ThirdSection.css";

export default class ThirdSection extends React.Component{
    goToMenu = ()=>{
        this.props.history.push("/menu/pizza")
    }

    render(){
        return (
            <section id="third-section">
                <div id="third-section-box-container">
                    <section className="third-section-box" onClick={this.goToMenu}>
                        <div>
                            <h2>Fresh Eats</h2>
                            <p>See our menu</p>
                        </div>
                    </section>

                    <section className="third-section-box" onClick={this.goToMenu}>
                        <div>
                            <h2>Order TakeOut</h2>
                            <p>See our menu</p>
                        </div>
                    </section>
                </div>
            </section>
        );
    }
}