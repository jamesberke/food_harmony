import React from "react";
import "./signup_form.css";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.user;
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  render() {
    return (
      <div className="signup-form-container">
        <div className="signup-form-title">Join FoodHarmony</div>
        <form
          className="signup-form-input-container"
          onSubmit={this.handleSubmit}
        >
        {/* <i className="fas fa-lock"></i> */}
        <input
            required
            type="text"
            value={this.state.username}
            className="signup-form-input"
            onChange={this.update("username")}
            placeholder="Username"
        />
        {/* <i className="fas fa-lock"></i> */}
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
