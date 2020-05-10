import React from "react";
import bbq from "../../components/carousel/carousel_images/carousel-bbq.jpg";
import burger from "../../components/carousel/carousel_images/carousel-burger.jpg";
import dumplings from "../../components/carousel/carousel_images/carousel-dumplings.jpg";
import pasta from "../../components/carousel/carousel_images/carousel-pasta.jpg";
import pizza from "../../components/carousel/carousel_images/carousel-pizza.jpg";
import sushi from "../../components/carousel/carousel_images/carousel-sushi.jpg";
import tacos from "../../components/carousel/carousel_images/carousel-tacos.jpg";
import "./food-index.css";

import { Icon } from "@iconify/react";
import starIcon from "@iconify/icons-oi/star";

class FoodIndexItem extends React.Component {
	constructor(props) {
		super(props);
		this.demoFoods = [bbq, burger, dumplings, pasta, pizza, sushi, tacos];
		this.pickRestaurant = this.pickRestaurant.bind(this);
	}

	priceCategory(price) {
		if (price > 0 && price < 15) {
			return 1;
		} else if (price >= 15 && price < 50) {
			return 2;
		} else if (price >= 50) {
			return 3;
		}
	}

	pickRestaurant() {
		const restaurant = {
			name: this.props.food.restaurantName,
			priceRange: this.props.food.restaurantPriceRange,
			phoneNumber: this.props.food.restaurantPhoneNumber,
			streetAddress: this.props.food.restaurantStreetAddress,
			cityAddress: this.props.food.restaurantCityAddress,
			webLink: this.props.food.restaurantWebLink,
			photo: this.props.food.restaurantPhoto,
		};

		this.props.openModal({ type: "restaurantShow", data: restaurant });
	}

	render() {
		let priceRange = [];
		for (let i = 0; i < this.priceCategory(this.props.food.price); i++) {
			priceRange.push("$");
		}
		let i = Math.floor(Math.random() * this.demoFoods.length);
		return (
			<div className="food-index-item" onClick={this.pickRestaurant}>
				<div className="overlay">
					<div className="overlay-content-container">
						<div className="overlay-title">
							{this.props.food.description}
						</div>

						<div className="overlay-subtitle">
							<i>{this.props.food.restaurantName}</i>
						</div>
						<div className="overlay-rating-info">
							<Icon icon={starIcon} />
							<Icon icon={starIcon} />
							<Icon icon={starIcon} />
							<Icon icon={starIcon} />
							<Icon icon={starIcon} />
						</div>
						<div className="overlay-details">
							<div className="overlay-details-item-1">
								{priceRange.join(" ")}
							</div>
							<div className="overlay-details-item-2"></div>
							<div className="overlay-details-item-3">
								{/* <span>
									<Icon icon={locationArrow} />
								</span> */}
								<span className="overlay-details-item-3-text">
									{(this.props.food.distance / 1000).toFixed(
										1
									)}{" "}
									km
								</span>
							</div>
						</div>
					</div>
				</div>
				{/* <img src={this.props.food.photo} /> */}
				{this.props.img}
			</div>
		);
	}
}

export default FoodIndexItem;
