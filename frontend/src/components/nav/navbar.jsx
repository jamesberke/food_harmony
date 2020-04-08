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
					<img src={logo} className="nav-logo" />
					<div className="navbar-logo-main">FoodHarmony</div>				
				</div>
				<div className="navbar-right">
					{this.props.isAuthenticated ? (
							<button
							className="navbar-login"
							onClick={() => {
								 this.props.logout()}
							}
						>
							LOG OUT
						</button>
					) : (
						<>
							<button
								className="navbar-login"
								onClick={() =>
									this.props.openModal("loginUser")
								}
							>
								LOG IN
							</button>
							<button
								className="navbar-signup"
								onClick={() =>
									this.props.openModal("signupUser")
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
