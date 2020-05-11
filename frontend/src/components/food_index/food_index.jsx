import React from "react";
import FoodIndexItem from "./food_index_item";
import * as DataUtil from "../../util/data_util";
import "./food-index.css";
import Loading from "react-loading-components";
import { loadImage } from "../../util/data_util";

class FoodIndex extends React.Component {
	constructor(props) {
		super(props);
		this.state = { loading: true, foods: [], images: [] };
	}

	async componentDidMount() {
		let userLocationinfo = {
			location: {
				type: "Point",
				coordinates: [-122.410594, 37.787098],
			},
			distance: 10000,
		};

		// let userLocationinfo = {
		// 	location: {
		// 		type: "Point",
		// 		coordinates: this.props.user.location,
		// 	},
		// 	distance: 10000,
		// };
		try {
			let resp = await DataUtil.fetchFoods(userLocationinfo);

			let images = [];
			for (let key in resp.data) {

				// https://food-harmony-dev.s3.us-west-1.amazonaws.com/ghiradelli1.jpg
				let smallerImageURL = resp.data[key].photo.replace("food-harmony-dev", "food-harmony-dev-50-per-images")
				let img = loadImage(smallerImageURL);

				images.push(<div className="fade-in" ><img src={img.url} width={img.width} height={img.height} /></div>);
			}
			// Promise.all(images).then((response) => {
				this.setState({ loading: false, foods: resp.data, images: images });
			// });
		} catch (e) {
			console.error(e);
		}
	}

	render() {
		if (this.state.loading) {
			return (
				<div className="loading-wrapper">
					<div className="loading">
						<Loading
							type="tail_spin"
							width={100}
							height={100}
							fill="#f44242"
						/>
					</div>
				</div>
			);
		}

		let foodItems = this.state.foods.map((food, idx) => {
			return (
				<FoodIndexItem
					food={food}
					openModal={this.props.openModal}
					key={idx}
					img={this.state.images[idx]}
				/>
			);
		});
		return (
			<div className="splash-container">
				<div className="splash-1">
					<div className="food-items-container">{foodItems}</div>
				</div>
				<div className="splash-2"></div>
			</div>
		);
	}
}

export default FoodIndex;
