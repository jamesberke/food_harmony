import React from "react";
import background from "./splash-background.jpg";
import Carousel from "../carousel/carousel";
import logo from '../nav/foodharmony-logo-2.png';
import { Link } from 'react-router-dom';
import "./splash_page.css";

class SplashPage extends React.Component {
	render() {
		return (
			<div className="splash-container">
				<div className="splash-1">
					<img
						src={background}
						alt="background"
						className="splash-background-image"
					></img>
					<div className="splash-1-header">
						<div className="splash-1-title">
							The new way to order out.
						</div>
						<div className="splash-1-text">
							We help provide a simple and elegant solution to
							quickly find your next meal.
						</div>
						<div>
							<button className="splash-1-button" onClick={() => this.props.openModal("loginUser")}>Sign In</button>
							<button className="splash-1-button" onClick={() => this.props.openModal("signupUser")}>Get Started</button>
						</div>
					</div>
					<div className="carousel-title-container">
						<div className="splash-1-title carousel-header-text">
							Find great options near you.
						</div>
						<div className="carousel-header-text description">
							Enjoy a curated image gallery menu of local quizine and healthy eats! 
						</div>
					</div>
					<Carousel />
					<div className="splash-2">
						<div className="splash-2-col">
							<h3 className="splash-col-title">Easy set up</h3>
							<div className="splash-col-content">
								Allow location services on sign up to grab your home base.
								A vetted and currated list of meal items will light up your home page!
        					</div>
						</div>
						<div className="splash-2-col">
							<h3 className="splash-col-title">Find your perfect meal</h3>
							<div className="splash-col-content">
								Enjoy an infinite scroll through pictures of local quizine
								and healthy eats from your neighborhood.
        					</div>
						</div>
						<div className="splash-2-col">
							<h3 className="splash-col-title">Go get your food!</h3>
							<div className="splash-col-content">
								Click on a picture that looks good and discover a new local restaurant
								displayed with title, phone number, and link to website.
        					</div>
						</div>
					</div>
					<div className="footer">
						<img src={logo} className="footer-logo" />
						<div className="footer-text">
							The better way to find a meal
						</div>
						<div className="footer-buttons">
							<button className="footer-button">Get Started</button>
							<Link to="/about" className="footer-link">About Us</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SplashPage;


