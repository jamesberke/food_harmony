import { connect } from "react-redux";
import LoginForm from "./login_form";
import { login } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => ({
	isAuthenticated: state.session.isAuthenticated,
	currentUser: state.session.user,
	user: {
		email: "",
		password: "",
	},
	errors: state.errors.sessionErrors,
});

const mapDispatchToProps = dispatch => ({
	login: user => dispatch(login(user)),
	closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
