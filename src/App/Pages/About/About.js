
import React from "react";
import { Link } from "react-router-dom";
import AboutPizza from "./about-pizza.jpg";
import "./About.css";

export default class About extends React.Component {
    render() {
        return (
            <main id="about-page-section">
                <header className="about-hero">
                    <div className="about-hero-content">
                        <span className="about-eyebrow">
                            GET TO KNOW US
                        </span>

                        <h1>
                            More than pizza.
                            <em> It's a passion.</em>
                        </h1>

                        <p>
                            Good food brings people together.
                            Discover the story and passion behind
                            The Pizza Spot.
                        </p>
                    </div>
                </header>

                <section
                    className="about-story"
                    aria-labelledby="about-story-title"
                >
                    <div className="about-story-container">
                        <div className="about-story-content">
                            <span className="about-section-label">
                                OUR STORY
                            </span>

                            <h2 id="about-story-title">
                                Made with care.
                                <em> Shared with love.</em>
                            </h2>

                            <p className="about-story-lead">
                                Since 2021, The Pizza Spot has
                                been bringing people together
                                over great pizza.
                            </p>

                            <p>
                                At The Pizza Spot, we believe the
                                secret to great pizza is the quality
                                of the ingredients and the passion
                                behind every pie we create.
                            </p>

                            <p>
                                As a family-owned pizzeria, we take
                                pride in preparing handcrafted
                                pizzas with carefully selected
                                ingredients. From our signature
                                dough to our savory toppings,
                                every detail matters.
                            </p>

                            <p>
                                Whether you're enjoying a classic
                                Margherita or trying one of our
                                specialty pizzas, our goal is to
                                make every visit feel welcoming
                                and every meal worth sharing.
                            </p>

                            <div className="about-story-signature">
                                <span></span>
                                <strong>THE PIZZA SPOT</strong>
                            </div>
                        </div>

                        <div className="about-story-image-wrap">
                            <img
                                src={AboutPizza}
                                alt="Freshly prepared pizza with melted cheese and toppings"
                                className="about-story-image"
                                loading="lazy"
                                decoding="async"
                            />

                            <div className="about-story-image-caption">
                                <span>EST. 2021</span>
                                <span>THE PIZZA SPOT</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="about-values"
                    aria-labelledby="about-values-title"
                >
                    <div className="about-values-container">
                        <span className="about-section-label">
                            WHAT MATTERS TO US
                        </span>

                        <h2 id="about-values-title">
                            The little things
                            <em> make the difference.</em>
                        </h2>

                        <div className="about-values-grid">
                            <article className="about-value">
                                <span className="about-value-number">
                                    01
                                </span>

                                <h3>Quality Ingredients</h3>

                                <p>
                                    Great pizza starts with
                                    ingredients chosen for flavor
                                    and freshness.
                                </p>
                            </article>

                            <article className="about-value">
                                <span className="about-value-number">
                                    02
                                </span>

                                <h3>Made with Passion</h3>

                                <p>
                                    We believe care and attention
                                    to detail belong in every pie.
                                </p>
                            </article>

                            <article className="about-value">
                                <span className="about-value-number">
                                    03
                                </span>

                                <h3>Made for Sharing</h3>

                                <p>
                                    Pizza tastes even better when
                                    it brings friends and family
                                    together.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                <section
                    id="contact-info-section"
                    aria-labelledby="about-contact-title"
                >
                    <div className="about-contact-container">
                        <div className="about-contact-intro">
                            <span className="about-section-label">
                                COME SAY HELLO
                            </span>

                            <h2 id="about-contact-title">
                                We'd love to
                                <em> hear from you.</em>
                            </h2>

                            <p>
                                Have a question, feedback, or
                                something special in mind?
                                We're always happy to hear
                                from our customers.
                            </p>

                            <Link
                                to="/menu/pizza"
                                className="about-contact-menu-btn"
                            >
                                Explore Our Menu
                                <span aria-hidden="true">→</span>
                            </Link>
                        </div>

                        <div className="about-contact-details">
                            <div className="about-contact-item">
                                <h3>Location</h3>

                                <address>
                                    369 Somewhere St.
                                    <span>New York City, NY 07008</span>
                                </address>
                            </div>

                            <div className="about-contact-item">
                                <h3>Phone</h3>

                                <a href="tel:8888888888">
                                    (888) 888-8888
                                </a>
                            </div>

                            <div className="about-contact-item">
                                <h3>Email</h3>

                                <a href="mailto:email@address.com">
                                    email@address.com
                                </a>
                            </div>

                            <div className="about-contact-item">
                                <h3>Business Hours</h3>

                                <div className="about-hours">
                                    <p>
                                        <span>Monday – Thursday</span>
                                        <span>Hours to be confirmed</span>
                                    </p>

                                    <p>
                                        <span>Friday – Saturday</span>
                                        <span>Hours to be confirmed</span>
                                    </p>

                                    <p>
                                        <span>Sunday</span>
                                        <span>Hours to be confirmed</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}
