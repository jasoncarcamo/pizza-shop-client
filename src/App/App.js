import './App.css';
import React from "react";
import {Route} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Register from "./Pages/Register/Register";
import LogIn from "./Pages/LogIn/LogIn";
import Menu from "./Pages/Menu/Menu";
import Order from "./Pages/Order/Order";
import CartPage from './Pages/CartPage/CartPage';
import CheckOut from "./Pages/Checkout/Checkout";
import About from "./Pages/About/About";
import Profile from './Pages/Profile/Profile';
import WelcomeScreen from './WelcomeScreen/WelcomeScreen';

export default class App extends React.Component{

    render(){
        return (
            <>
                <Route path="/" component={Header}></Route>

                <Route path="/" component={WelcomeScreen}></Route>

                <main>
                    <Route exact path="/" component={LandingPage}></Route>
                    <Route exact path="/register" component={Register}></Route>
                    <Route exact path="/login" component={LogIn}></Route>
                    <Route path="/menu" component={Menu}></Route>
                    <Route exact path="/order" component={Order}></Route>
                    <Route exact path="/profile" component={Profile}></Route>
                    <Route exact path="/cart/edit" component={CartPage}/>
                    <Route exact path="/cart/checkout" component={CheckOut}/>
                    <Route exact path="/about" component={About}></Route>
                </main>

                <Route path="/" component={Footer}></Route>
            </>
        );
    };
};
