import React from "react";
import "./signup_form.css";
import {Redirect} from "react-router-dom"

class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = props.user;
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(field) {
		return event => this.setState({ [field]: event.target.value });
	}

	handleSubmit(e) {
		e.preventDefault()
		this.props.signup(this.state);
	}

	componentDidMount() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(position => {
				this.setState({
					location: {
						type: "Point",
						coordinates: [position.coords.longitude, position.coords.latitude],
					},
				});
			});
		} else {
			this.setState({
				location: {
					type: "Point",
					coordinates: [37.773972, -122.431297], //default location to San Francisco, CA
				},
			});
		}
	}

	render() {
		if(this.props.isAuthenticated) {
			return (<Redirect to={'/index'} />)
		}

		return (
			<div className="signup-form-container">
				<div className="signup-form-title">Join FoodHarmony</div>
				<form
					className="signup-form-input-container"
					onSubmit={this.handleSubmit}
				>
					<input
						required
						type="text"
						value={this.state.firstName}
						className="signup-form-input"
						onChange={this.update("firstName")}
						placeholder="First name"
					/>
					<input
						required
						type="text"
						value={this.state.lastName}
						className="signup-form-input"
						onChange={this.update("lastName")}
						placeholder="Last name"
					/>

					<input
						required
						type="email"
						value={this.state.email}
						className="signup-form-input"
						onChange={this.update("email")}
						placeholder="Email"
					/>
					{/* <i className="fas fa-lock two"></i> */}
					<input
						required
						type="password"
						value={this.state.password}
						className="signup-form-input"
						minLength="6"
						onChange={this.update("password")}
						placeholder="Password"
					/>
					<input
						required
						type="password"
						value={this.state.password2}
						className="signup-form-input"
						minLength="6"
						onChange={this.update("password2")}
						placeholder="Retype password"
					/>
					<br />
					<input
						type="submit"
						value="Sign Up"
						className="signup-submit-button"
					/>
					<input
						type="submit"
						value="Sign In As Demo User"
						className="demo-submit-button"
						onClick={this.demoUserSubmit}
					/>
					<br />
				</form>
			</div>
		);
	}
}

export default SignupForm;
