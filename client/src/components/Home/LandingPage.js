import React, {useState, useRef} from "react";
import HeaderComp from "./home-components/HeaderComp";
import CoverComp from "./home-components/CoverComp";
import FaqComp from "./home-components/FaqComp";
import FooterComp from "./home-components/FooterComp";
import {Login} from "./home-components/LoginComp";
import {Register} from "./home-components/RegisterComp";

import AboutUsSection from "./home-components/AboutUsSection";

import "./LandingPage.css";

const LandingPage = () => {
  const [currentForm, setCurrentForm] = useState("login");
  const loginref = useRef();

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="app">
      <HeaderComp onFormSwitch={toggleForm} scrollTo={loginref} />
      {/* miainFormContent? */}
      <div className="Form">
        {currentForm === "login" ? (
          <Login onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div>
      <CoverComp scrollTo={loginref} />
      <AboutUsSection />
      <FaqComp scrollTo={loginref} />
      <FooterComp />
    </div>
  );
};

export default LandingPage;
