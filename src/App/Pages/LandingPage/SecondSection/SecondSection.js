import React from "react";
import "./SecondSection.css";

export default class SecondSection extends React.Component{
    render(){
        return (
            <section id="second-section">
                <div>
                    <p><strong>Our Story</strong></p>
                </div>

                <h2 id="second-section-header">THE PASSION FOR PIZZA</h2>

                <img id="second-section-img" src="https://static.wixstatic.com/media/5bfb6f_7e3418aaf11140e4bab5ded7e0a43195.jpg/v1/fill/w_1198,h_796,al_c,q_85,usm_0.66_1.00_0.01/5bfb6f_7e3418aaf11140e4bab5ded7e0a43195.webp" alt="Man smiling"/>

                <p className="second-section-p">
                    It sounds like you're craving something amazing—high-energy, delicious, and packed with passion! Imagine a pizza that hits all the right notes: the perfect crust, a zesty sauce, and an overload of mouthwatering toppings that will make your taste buds dance. Every bite full of flavor, warmth, and that satisfying cheesy pull. It’s not just food; it's an experience, a passion project in every slice!
                </p>

                <p className="second-section-p">What toppings would make your dream pizza?</p>
            </section>
        )
    }
}