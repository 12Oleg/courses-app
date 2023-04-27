import { actionTypes } from './actionTypes';

export const coursesManage = (state = [], { type, payload }) => {
	switch (type) {
		case actionTypes.GET_COURSES:
			return payload.result;

		case actionTypes.LOG_OUT_COURSES:
			return [];

		case actionTypes.ADD_COURSE:
			return [...state, payload];

		case actionTypes.DELETE_COURSE:
			return state.filter((course) => course.id !== payload);

		case actionTypes.UPDATE_COURSE:
			return state.map((course) =>
				course.id === payload.id ? { ...course, ...payload } : course
			);

		default:
			return state;
	}
};
