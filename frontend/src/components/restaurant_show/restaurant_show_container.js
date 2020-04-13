import { connect } from 'react-redux';
import RestaurantShow from './restaurant_show';

// need to grab the restaurant info and pass it through to props as pickedRestaurant 
// to render in the RestaurantShow modal

const mapStateToProps = state => {
    return ({

    });
};

// No mapDispatchToProps needed 

export default connect(mapStateToProps)(RestaurantShow)