import { connect } from "react-redux";
import SignupForm from "./signup_form";
import { signup } from "../../actions/session_actions";

const mapStateToProps = state => ({
  currentUser: state.session.user,
  user: {
    username: "",
    email: "",
    password: ""
  },
  errors: state.errors.sessionErrors
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
