import React, { useState, useRef } from 'react'
import HeaderComp from './home/HeaderComp'
import CoverComp from "./home/CoverComp";
import FaqComp from "./home/FaqComp";
import FooterComp from "./home/FooterComp";
import { Login } from "./home/LoginComp";
import { Register } from "./home/RegisterComp";
import './LandingPage.css'

const LandingPage = () => {
    const [currentForm, setCurrentForm] = useState("login");
    const loginref = useRef()

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    };
    return (
        <div className="app">
            <HeaderComp onFormSwitch={toggleForm} scrollTo={loginref} />
            <div className="Form">
                {currentForm === "login" ? (
                    <Login onFormSwitch={toggleForm} />
                ) : (
                    <Register onFormSwitch={toggleForm} />
                )}
            </div>
            <CoverComp scrollTo={loginref} />
            <FaqComp scrollTo={loginref} />
            <FooterComp />
        </div>
    )
}

export default LandingPage