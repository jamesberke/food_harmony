import "./navbar.css";
import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="navbar-container">
            <div className="navbar-left">
              <div className="navbar-logo-main">FoodHarmony</div>
              <input className="navbar-search" type="text" value="SEARCH..." />
            </div>
            <div className="navbar-right">
              <button className="navbar-login"
                onClick={() => this.props.openModal("loginUser")}
              >
                LOG IN
              </button>
              <button className="navbar-signup"
                onClick={() => this.props.openModal("signupUser")}
              >
                GET STARTED
              </button>
            </div>
          </div>
        );
    }
}

export default NavBar;