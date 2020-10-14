import "./navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "./foodharmony-logo-2.png";

class NavBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="navbar-container">
				<div className="navbar-left">
					<Link to="/" className="navbar-home"><img src={logo} className="nav-logo" />
					{/* <img src={logo} className="nav-logo" /> */}
					<div className="navbar-logo-main">FoodHarmony</div>
					</Link>
				</div>
				<div className="navbar-right">
					<Link to="/about" className="navbar-about-link">
						ABOUT US
					</Link>
					{this.props.isAuthenticated ? (
						<button
							className="navbar-login"
							onClick={() => {
								this.props.logout()
							}
							}
						>
							LOG OUT
						</button>
					) : (
							<>
							<button
								className="navbar-login"
								onClick={() =>
									this.props.openModal({ type: "loginUser" })
								}
							>
								SIGN IN
							</button>
							<button
								className="navbar-signup"
								onClick={() =>
									this.props.openModal({ type: "signupUser" })
								}
							>
								GET STARTED
							</button>
							</>
						)}
				</div>
			</div>
		);
	}
}

export default NavBar;
