import SplashPage from './splash_page'
import {connect} from 'react-redux'
import { openModal } from "../../actions/modal_actions";

const mapDispatchToProps = dispatch => ({
	openModal: modal => dispatch(openModal(modal)),
});

export default connect(null, mapDispatchToProps)(SplashPage)