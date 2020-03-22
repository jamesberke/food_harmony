import React from 'react';

class FoodIndexItem extends React.Component {

	constructor(props) {
		super(props)
	}


    render() {
		// console.log(this.props.food)
        return(
		<div className="food-index-item">{this.props.food.description}</div>
        )
    }
}

export default FoodIndexItem