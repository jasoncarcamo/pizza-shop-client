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

                <p id="second-section-p">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            </section>
        )
    }
}