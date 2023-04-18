import { actionTypes } from './actionTypes';

export const coursesManage = (state = [], { type, payload }) => {
	//Если не через state = [], а через const, то создасться внутри элемент в виде пустого массива
	switch (type) {
		case actionTypes.GET_COURSES:
			//return [...state, ...payload.result]; В таком случае не заменяется, а добавляется
			return [...payload.result];

		/*case actionTypes.LOG_OUT_COURSES:
			return [];*/

		case actionTypes.ADD_COURSE:
			return [...state, payload];

		case actionTypes.DELETE_COURSE:
			return state.filter((course) => course.id !== payload);

		default:
			return state;
	}
};
