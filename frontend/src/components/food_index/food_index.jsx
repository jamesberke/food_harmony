import React from "react";
import FoodIndexItem from "./food_index_item";
import * as DataUtil from "../../util/data_util";
import "./food-index.css";

class FoodIndex extends React.Component {
	constructor(props) {
		super(props);
		this.state = { loading: true, foods: [] };
	}

	async componentDidMount() {
		let userLocationinfo = {
			location: {
				type: "Point",
				coordinates: [-73.856077, 40.848447],
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
			this.setState({ loading: false, foods: resp.data });
		} catch (e) {
			console.error(e);
		}
	}

	render() {
		if (this.state.loading) {
			return (
				<div className="splash-container">
					<div className="splash-1">Loading</div>
					<div className="splash-2"></div>
				</div>
			);
		}

		let foodItems = this.state.foods.map(food => {
			return <FoodIndexItem food={food} openModal={this.props.openModal} />;
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
