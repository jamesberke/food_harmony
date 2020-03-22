import React from 'react';
import FoodIndexItem from './food_index_item';

class FoodIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="food-index-container">
                <FoodIndexItem />
            </div>
        )
    }
};

export default FoodIndex;