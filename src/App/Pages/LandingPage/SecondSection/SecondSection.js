
import React from "react";
import "./SecondSection.css";

export default class SecondSection extends React.Component {
    render() {
        return (
            <section
                id="second-section"
                aria-labelledby="second-section-header"
            >
                <div className="second-section-container">
                    <div className="second-section-image-wrap">
                        <img
                            id="second-section-img"
                            src="https://static.wixstatic.com/media/5bfb6f_7e3418aaf11140e4bab5ded7e0a43195.jpg/v1/fill/w_1198,h_796,al_c,q_85,usm_0.66_1.00_0.01/5bfb6f_7e3418aaf11140e4bab5ded7e0a43195.webp"
                            alt="Smiling person pictured in a restaurant setting"
                            loading="lazy"
                            decoding="async"
                        />

                        <div className="second-section-image-label">
                            MADE FOR GOOD MOMENTS
                        </div>
                    </div>

                    <div className="second-section-content">
                        <div className="second-section-eyebrow">
                            <span></span>
                            OUR STORY
                        </div>

                        <h2 id="second-section-header">
                            A passion for
                            <em> great pizza.</em>
                        </h2>

                        <p className="second-section-lead">
                            There's something special about
                            sharing a really good pizza.
                        </p>

                        <p className="second-section-p">
                            From the first bite to the last slice,
                            we believe pizza should bring people
                            together. It's about great flavors,
                            simple pleasures, and the moments
                            shared around the table.
                        </p>

                        <p className="second-section-p">
                            Whether you're stopping by for a
                            favorite or discovering something new,
                            there's always a reason to enjoy
                            another slice.
                        </p>

                        <div className="second-section-signature">
                            <span className="second-section-signature-line"></span>
                            <span>THE PIZZA SPOT</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
