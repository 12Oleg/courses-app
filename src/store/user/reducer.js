import { actionTypes } from './actionTypes';

const userInitialState = {
	token: localStorage.getItem('userToken')
		? localStorage.getItem('userToken')
		: '',
	isAuth: false,
	name: '',

	email: '',
	role: '',
};
export const userAuthorization = (
	state = userInitialState,
	{ type, payload }
) => {
	switch (type) {
		case actionTypes.LOG_IN:
			return {
				...state,
				token: payload.token,
				isAuth: true,
				name: payload.name,
				email: payload.email,
				role: payload.role,
			};
		case actionTypes.LOG_OUT:
			return {
				...state,
				isAuth: false,
				name: '',
				email: '',
				token: '',
				role: '',
			};
		default:
			return state;
	}
};
