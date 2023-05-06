import { actionTypes } from './actionTypes';

export const logIn = (result) => {
	return {
		type: actionTypes.LOG_IN,
		payload: result,
	};
};

export const logOut = () => {
	return {
		type: actionTypes.LOG_OUT,
	};
};
