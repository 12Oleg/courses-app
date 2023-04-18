import { actionTypes } from './actionTypes';

const userInitialState = {
	token: localStorage.getItem('userToken')
		? localStorage.getItem('userToken')
		: '',
	isAuth: localStorage.getItem('userToken') ? true : false,
	name: localStorage.getItem('userName')
		? localStorage.getItem('userName')
		: '',

	email: localStorage.getItem('userEmail')
		? localStorage.getItem('userEmail')
		: '',
};
export const userAuthorization = (
	state = userInitialState,
	{ type, payload }
) => {
	switch (type) {
		case actionTypes.LOG_IN:
			return {
				...state,
				isAuth: true,
				name: payload.user.name,
				email: payload.user.email,
				token: payload.result,
			};
		case actionTypes.LOG_OUT:
			return {
				...state,
				isAuth: false,
				name: '',
				email: '',
				token: '',
			};
		default:
			return state;
	}
};
