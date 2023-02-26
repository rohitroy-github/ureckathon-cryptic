import React, {useState} from "react";
import logo from "../../../assets/canva-logo.png";
import "../LandingPage.css";
import MenuIcon from "@mui/icons-material/Menu";

const HeaderComp = (props) => {
  const [open, setopen] = useState(false);
  const setToggler = () => {
    setopen((prevState) => !prevState);
    console.log(open);
  };

  // gotoAboutUsSection;
  function goToContactUsSection() {
    props.scrollTo.current.scrollIntoView({behavior: "smooth"});
  }

  function goToAboutUsSection() {
    props.scrollTo.current.scrollIntoView({behavior: "smooth"});
  }

  return (
    <>
      <div className="header" ref={props.scrollTo}>
        <a href="http://localhost:3000/">
          <img src={logo} alt="logo" className="logoImg" />
        </a>

        <div className="right_header">
          <div>
            <button
              className="navbarBtn"
              onClick={() => props.onFormSwitch("login")}
            >
              Login
            </button>
          </div>

          <div>
            {" "}
            <button
              className="navbarBtn"
              onClick={() => props.onFormSwitch("register")}
            >
              Register
            </button>
          </div>

          {/* <div>
            {" "}
            <a href="#">
              <button className="navbarBtn" onClick={goToAboutUsSection}>
                About
              </button>
            </a>
          </div> */}
          {/* 
          <div>
            {" "}
            <a href="#">
              <button className="navbarBtn" onClick={goToContactUsSection}>
                Contact
              </button>
            </a>
          </div> */}
        </div>
      </div>
      {/* mobile nav starts */}
      <div className="mobBar">
        <a href="http://localhost:3000/">
          <img src={logo} alt="logo" className="logoImg" />
        </a>{" "}
        <MenuIcon onClick={setToggler} />
        <div className={`righBar${open && "open"}`}>
          <div>
            <button
              className="mobNavbarBtn"
              onClick={() => props.onFormSwitch("login")}
            >
              Login
            </button>
          </div>

          <div>
            {" "}
            <button
              className="mobNavbarBtn"
              onClick={() => props.onFormSwitch("register")}
            >
              Register
            </button>
          </div>

          {/* <div>
            {" "}
            <a href="#">
              <button className="mobNavbarBtn">About</button>
            </a>
          </div> */}

          {/* <div>
            {" "}
            <a href="#">
              <button className="mobNavbarBtn">Contact</button>
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HeaderComp;
