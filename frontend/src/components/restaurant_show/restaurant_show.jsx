import React from 'react';

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return(
            <div className="restaurant-show-container">
                <img src="frontend/src/components/carousel/carousel_images/carousel-bbq.jpg"
                    className="restaurant-image-main">
                </img>
                <div className="restaurant-info-container">
                    <div className="restaurant-title"></div>
                    <div className="restaurant-phone-number"></div>
                    <div className="restaurant-address"></div>
                    
                </div>
            </div>
        )
    }
}

export default RestaurantShow;