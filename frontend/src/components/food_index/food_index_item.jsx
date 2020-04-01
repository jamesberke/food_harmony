import React from "react";
import bbq from "../../components/carousel/carousel_images/carousel-bbq.jpg";
import burger from "../../components/carousel/carousel_images/carousel-burger.jpg";
import dumplings from "../../components/carousel/carousel_images/carousel-dumplings.jpg";
import pasta from "../../components/carousel/carousel_images/carousel-pasta.jpg";
import pizza from "../../components/carousel/carousel_images/carousel-pizza.jpg";
import sushi from "../../components/carousel/carousel_images/carousel-sushi.jpg";
import tacos from "../../components/carousel/carousel_images/carousel-tacos.jpg";
import "./food-index.css";

import { Icon, InlineIcon } from "@iconify/react";
import heavyDollarSign from "@iconify/icons-noto/heavy-dollar-sign";

class FoodIndexItem extends React.Component {
	constructor(props) {
		super(props);
		this.demoFoods = [bbq, burger, dumplings, pasta, pizza, sushi, tacos];
	}

	render() {
		let i = Math.floor(Math.random() * this.demoFoods.length);
		return (
			<div className="food-index-item">
				<img src={this.demoFoods[i]} />
				<div className="overlay">
					<div className="overlay-content-container">
						<div className="overlay-title">
							{this.props.food.description}
						</div>
						{/* <p><div>Something</div></p>
						<p><div>Something</div></p> */}
					</div>
				</div>
			</div>
		);
	}
}

export default FoodIndexItem;
