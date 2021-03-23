import React from "react";
import "./LandingPage.css";
import FirstSection from './FirstSection/FirstSection';
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";

export default class LandingPage extends React.Component{

    render(){
        return (
            <section id="landing-page-section">
                <FirstSection history={this.props.history}/>

                <SecondSection/>

                <ThirdSection history={this.props.history}/>
            </section>
        );
    };  
}