import React, {useState} from "react";
import logo from "../../../assets/logo.png";
import "../LandingPage.css";
import MenuIcon from "@mui/icons-material/Menu";

const HeaderComp = (props) => {
  const [open, setopen] = useState(false);
  const setToggler = () => {
    setopen((prevState) => !prevState);
    console.log(open);
  };
  return (
    <>
      <div className="header" ref={props.scrollTo}>
        <img src={logo} alt="logo" />

        <div className="right_header">
          <div>
            <button
              className="navbarBtn faqBlueButton"
              onClick={() => props.onFormSwitch("login")}
            >
              Login
            </button>
          </div>

          <div>
            {" "}
            <button
              className="navbarBtn faqBlueButton"
              onClick={() => props.onFormSwitch("register")}
            >
              Register
            </button>
          </div>

          <div>
            {" "}
            <a href="#">
              <button className="navbarBtn faqBlueButton">About</button>
            </a>
          </div>

          <div>
            {" "}
            <a href="#">
              <button className="navbarBtn faqBlueButton ">Contact</button>
            </a>
          </div>
        </div>
      </div>
      {/* mobile nav starts */}
      <div className="mobBar">
        <img src={logo} alt="logo" />
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

          <div>
            {" "}
            <a href="#">
              <button className="mobNavbarBtn">About</button>
            </a>
          </div>

          <div>
            {" "}
            <a href="#">
              <button className="mobNavbarBtn">Contact</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComp;
