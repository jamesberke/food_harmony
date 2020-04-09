import { connect } from "react-redux";
import SignupForm from "./signup_form";
import { signup, login } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => {
	
	return {
		isAuthenticated: state.session.isAuthenticated,
		currentUser: state.session.user,
		user: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			password2: "",
			location: "",
		},
		errors: state.errors.sessionErrors,
	};
};

const mapDispatchToProps = dispatch => ({
	signup: user => dispatch(signup(user)),
	login: user => dispatch(login(user)),
	closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
