import React from "react";
import background from './splash-background.jpg';
import './splash_page.css';

class SplashPage extends React.Component {
  render() {
    return (
      <div className="splash-1">
        <img
          src={background}
          alt="background"
          className="splash-background-image"
        ></img>
        <div className="splash-1-title">
            The new way to order out.
        </div>
        <div className="splash-1-text">
            FoodHarmony provides a simple and elegant solution to find your next meal.
        </div>
      </div>
    );
  }
}

export default SplashPage;
