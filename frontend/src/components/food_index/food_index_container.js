import { connect } from "react-redux";
import FoodIndex from "./food_index";

const mapStateToProps = state => ({
	user: state.session.user
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps)(FoodIndex);
