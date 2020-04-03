import { connect } from "react-redux";
import SignupForm from "./signup_form";
import { signup } from "../../actions/session_actions";

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
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
