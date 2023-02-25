import React, { useState } from 'react';
import logo from "../../../assets/logo.png"
import '../LandingPage.css'
import MenuIcon from '@mui/icons-material/Menu';


const HeaderComp = (props) => {
	const [open, setopen] = useState(false)
	const setToggler = () => {
		setopen((prevState) => !prevState)
		console.log(open);
	}
	return (
		<>
			<div className="header" ref={props.scrollTo}>
				<img src={logo} alt="logo" />

				<div className="right_header header">
					<button className="login_button yellow_button" onClick={() => props.onFormSwitch("login")}>Login</button>
					<button className="yellow_button " onClick={() => props.onFormSwitch("register")}>Register</button>
					<a href='/' className='header_link'>About</a>
					<a href='/' className='header_link'>Contact</a>
				</div>
			</div>
			{/* mobile nav starts */}
			<div className='mobBar'>
				<img src={logo} alt="logo" />
				<MenuIcon onClick={setToggler} />
				<div className={`righBar${open && "open"}`}>
					<button className="login_button yellow_button">Login</button>
					<button className="yellow_button ">Register</button>
					<a href='#' className='header_link'>About</a>
					<a href='#' className='header_link'>Contact</a>
				</div>
			</div>
		</>
	)
}

export default HeaderComp