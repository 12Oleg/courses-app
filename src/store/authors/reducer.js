import { actionTypes } from './actionTypes';

export const authorsManage = (state = [], { type, payload }) => {
	switch (type) {
		case actionTypes.GET_AUTHORS:
			return [...payload.result];

		/*case actionTypes.LOG_OUT_AUTHORS:
			return [];*/

		case actionTypes.ADD_AUTHOR:
			return [...state, payload];

		default:
			return state;
	}
};
