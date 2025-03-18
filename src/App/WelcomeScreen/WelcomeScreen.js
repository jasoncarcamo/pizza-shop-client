import React from "react";
import './WelcomeScreen.css';
import WelcomeImg from "./pizza-welcome.jpeg";

export default class WelcomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            loaded: false
        }
    }

    componentDidMount(){
        window.addEventListener("load", ()=>{
            this.setState({
                loaded: true
            });
        });
    }

    animationHandler = ()=>{
        if(this.state.loaded){
            
            return "animate-header";
        } else{
            return "";
        }
    }

    render(){
        console.log(this.state.loaded)
        return (
            <section id="welcome-screen-section">

                <h1 id={`${this.animationHandler()}`} className="welcome-msg-header">Welcome to Pizza Shop</h1>

                <button id="welcome-enter-btn">Enter</button>
            </section>
        )
    }
}