import React from "react";
import {BounceLoader} from "react-spinners"
import "./MenuLoading.css";

export default class MenuLoading extends React.Component{
    render(){
        return (
            <section id="menu-loading-section">
                <BounceLoader loading={true} color="red" size={100} className="menu-loading-icon"/>
            </section>
        );
    };
}