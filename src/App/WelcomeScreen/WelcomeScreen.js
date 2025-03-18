import React from "react";
import './WelcomeScreen.css';
import WelcomeImg from "./pizza-welcome.jpeg";

export default class WelcomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            loaded: false,
            close: false
        }
    }

    componentDidMount(){

        document.body.style.overflow = "hidden";

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

    closebtn = ()=>{
        document.body.style.overflow = "visible";
        this.setState({
            close: true
        });
    }

    closeWelcomeHandler = ()=>{
        if(this.state.close){
            return "close-welcome";
        } else{
            return "pending-close";
        };
    }

    render(){
        return (
            <section id="welcome-screen-section" className={this.closeWelcomeHandler()}>

                <h1 id={`${this.animationHandler()}`} className="welcome-msg-header">Welcome to Pizza Shop</h1>

                <button id="welcome-enter-btn" onClick={this.closebtn}>Enter</button>
            </section>
        )
    }
}