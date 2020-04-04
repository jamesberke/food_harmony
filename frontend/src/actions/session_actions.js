import * as SessionAPIUtil from "../util/session_api_util";
import jwt_decode from "jwt-decode";

import {closeModal} from "../actions/modal_actions"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

export const receiveCurrentUser = currentUser => ({
	type: RECEIVE_CURRENT_USER,
	currentUser,
});

export const receiveErrors = errors => ({
	type: RECEIVE_SESSION_ERRORS,
	errors,
});

export const logoutUser = () => ({
	type: RECEIVE_USER_LOGOUT,
});

export const signup = user => dispatch => {
	SessionAPIUtil.signup(user).then(
		resp => {
			SessionAPIUtil.login(user).then(res => {
				const { token } = res.data;
				localStorage.setItem("jwtToken", token);
				SessionAPIUtil.setAuthToken(token);
				const decoded = jwt_decode(token);
				dispatch(receiveCurrentUser(decoded));
				dispatch(closeModal())
			});
		},
		err => dispatch(receiveErrors(err))
	);
};

export const login = user => dispatch => {
	SessionAPIUtil.login(user)
		.then(res => {
			const { token } = res.data;
			localStorage.setItem("jwtToken", token);
			SessionAPIUtil.setAuthToken(token);
			const decoded = jwt_decode(token);
			
			let user = {...res.data.user, ...decoded}

			dispatch(receiveCurrentUser(user));
			dispatch(closeModal())
		})
		.catch(err => {
			console.log(err);
			//dispatch(receiveErrors(err.response.data));
		});
};
export const logout = () => dispatch => {
	localStorage.removeItem("jwtToken");
	SessionAPIUtil.setAuthToken(false);
	dispatch(logoutUser());
};
