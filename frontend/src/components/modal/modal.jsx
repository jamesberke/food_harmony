import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import LoginForm from '../../components/session/login_form_container';
import SignupForm from '../../components/session/signup_form_container';
import React from "react";
import './modal.css';

const Modal = ({ modal, closeModal }) => {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case "loginUser":
      component = <LoginForm />;
      break;
    case "signupUser":
      component = <SignupForm />;
      break;
    default:
      break;
  }

  return (
    <div className="modal-screen" onClick={closeModal}>
      <div className="modal-render" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
