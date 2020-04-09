import { connect } from "react-redux";
import FoodIndex from "./food_index";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = state => ({
	user: state.session.user
});

const mapDispatchToProps = dispatch => ({
	openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodIndex);
