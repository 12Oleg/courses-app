import { actionTypes } from './actionTypes';

export const getAuthors = (result) => {
	return {
		type: actionTypes.GET_AUTHORS,
		payload: result,
	};
};

export const logOutAuthors = () => {
	return {
		type: actionTypes.LOG_OUT_AUTHORS,
	};
};

export const addAuthor = (result) => {
	return {
		type: actionTypes.ADD_AUTHOR,
		payload: result,
	};
};
