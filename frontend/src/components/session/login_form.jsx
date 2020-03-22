import React from 'react';
import './login_form.css'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.user;
  }

  update(field) {
    return event => this.setState({ [field]: event.target.value });
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="login-form-title">Sign in to FoodHarmony</div>
        <form
          className="login-form-input-container"
          onSubmit={this.handleSubmit}
        >
          <h3 className="login-input-header">
            Enter your username and password.
          </h3>
          {/* <i className="fas fa-lock"></i> */}
          <input
            required
            type="text"
            value={this.state.username}
            className="login-form-input"
            onChange={this.update("username")}
            placeholder="JohnDoe13"
          />
          {/* <i className="fas fa-lock two"></i> */}
          <input
            required
            type="password"
            value={this.state.password}
            className="login-form-input"
            minLength="6"
            onChange={this.update("password")}
            placeholder="Password"
          />
          <br />
          <input
            type="submit"
            value="Sign In"
            className="login-submit-button"
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

export default LoginForm;