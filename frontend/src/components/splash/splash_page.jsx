import React from "react";
import background from "./splash-background.jpg";
import Carousel from "../carousel/carousel";
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
							<h3 className="splash-col-title">Conversations, organized</h3>
							<div className="splash-col-content">
								Instead of a single overstuffed inbox, conversations in Slack
								happen in dedicated spaces called channels.
        				</div>
						</div>
						<div className="splash-2-col">
							<h3 className="splash-col-title">Get looped in, not out</h3>
							<div className="splash-col-content">
								Slack makes it simple to follow conversations or find
								important information in an easily searchable archive.
        				</div>
						</div>
						<div className="splash-2-col">
							<h3 className="splash-col-title">Give focus a chance</h3>
							<div className="splash-col-content">
								Unlike email, Slack lets you choose which conversations are
								most important — and which can wait.
        				</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SplashPage;


