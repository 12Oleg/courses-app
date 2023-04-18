import { actionTypes } from './actionTypes';

export const getCourses = (result) => {
	return {
		type: actionTypes.GET_COURSES,
		payload: result,
	};
};

/*export const logOutCourses = () => {
	return {
		type: actionTypes.LOG_OUT_COURSES,
	};
};*/

export const addCourse = (result) => {
	return {
		type: actionTypes.ADD_COURSE,
		payload: result,
	};
};

export const deleteCourse = (result) => {
	return {
		type: actionTypes.DELETE_COURSE,
		payload: result,
	};
};
