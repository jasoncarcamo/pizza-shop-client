import React from "react";
import "./About.css";

export default class About extends React.Component{
    render(){
        return (
            <section id="about-page-section">
                <h1>About us</h1>

                <p id="about-page-paragraph">At Pizza Shop, we believe that the secret to great pizza is in the quality of ingredients and the passion behind every pie we create. Established in 2021, our family-owned pizzeria has been serving the community with fresh, hand-crafted pizzas made from only the finest, locally-sourced ingredients. From our signature dough to our delicious, savory toppings, we pride ourselves on delivering an unforgettable dining experience with every bite.
                Whether you're enjoying a classic Margherita or one of our specialty pizzas, we're committed to providing a warm, welcoming atmosphere where customers feel like part of the family. Our mission is simple: to bring people together over delicious food, great company, and the timeless tradition of pizza.
                We invite you to taste the difference that passion and quality make at Pizza Shop.</p>

                <div src="white-pizza.jpg" id="white-pizza-img"></div>

                <section id="contact-info-section">
                    <h4>Contact Us</h4>
                    <p>We'd love to hear from you! Whether you have a question, feedback, or just want to place an order, don't hesitate to get in touch with us.</p>
                    
                    <div>
                        <h4>location:</h4>
                        <p>369 Somewhere St.
                        New York City, Ny, 07008</p>
                    </div>

                    <div>
                        <h4>Phone:</h4>
                        <p>(888) 888-8888</p>
                    </div>

                    <div>
                        <h4>Email:</h4>
                        <p>email@address.com</p>
                    </div>

                    <div>
                        <h4>Business Hours:</h4>
                        <p>Monday - Thursday: Opening Time - Closing Time</p>
                        <p>Friday - Saturday: Opening Time - Closing Time</p>
                        <p>Sunday: Opening Time - Closing Time</p>
                    </div>
                </section>
            </section>
        );
    };
};