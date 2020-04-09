import React from 'react';

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props);
    };

    getPriceRange() {
        switch (this.props.pickedRestaurant.priceRange) {
            case "1":
                return "$";
            case "2":
                return "$$";
            case "3":
                return "$$$";
            default:
                break;
        };
    };

    parseAddress() {
        const line1 = this.props.pickedRestaurant.streetAddress;
        const line2 = this.props.pickedRestaurant.cityAddress;

        return (
            <div className="restaurant-address">
                <div className="address-line-1">{line1}</div>
                <div className="address-line-2">{line2}</div>
            </div>
        )
    };

    render() {
        return(
            <div className="restaurant-show-container">
                <img src="frontend/src/components/carousel/carousel_images/carousel-bbq.jpg"
                    className="restaurant-image-main">
                </img>
                <div className="restaurant-info-container">
                    <div className="restaurant-title">
                        {this.props.pickedRestaurant.name}
                    </div>
                    <div className="restaurant-price-value">
                        {this.getPriceRange()}
                    </div>
                    <div className="restaurant-phone-number">
                        {this.props.pickedRestaurant.phoneNumber}
                    </div>
                    {this.parseAddress()}
                </div>
            </div>
        )
    }
}

export default RestaurantShow;