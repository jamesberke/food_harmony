import React from "react";
import FoodIndexItem from "./food_index_item";
import * as DataUtil from "../../util/data_util";

class FoodIndex extends React.Component {
	constructor(props) {
		super(props);
		this.state = { loading: true, foods: [] };
	}

	componentDidMount() {
		let info = {
			location: {
				type: "Point",
				coordinates: [-73.856077, 40.848447],
			},
			distance: 10000,
		};

		// debugger
		DataUtil.fetchFoods(info).then(
			resp => {
				// debugger
				this.setState({ loading: false, foods: resp.data });
			},
			err => {
				console.log(err);
			}
		);
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
			return <FoodIndexItem food={food} />;
		})
		return (
			<div className="splash-container">
				<div className="splash-1">
					{foodItems}
				</div>
				<div className="splash-2"></div>
			</div>
		);
	}
}

export default FoodIndex;
