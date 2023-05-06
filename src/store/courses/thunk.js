import {
	urlApiAddCourse,
	urlApiCourseWithoutId,
	urlApiCourses,
	urlRoutePathCourses,
} from '../../url';
import {
	addCourse,
	deleteCourse,
	getCourses,
	updateCourse,
} from './actionCreators';

export const getCoursesFromServer = () => async (dispatch) => {
	try {
		const response = await fetch(urlApiCourses);
		const result = await response.json();
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		dispatch(getCourses(result));
	} catch (error) {
		alert(error);
	}
};

export const addCourseToServer =
	(newCourse, history) => async (dispatch, getState) => {
		try {
			const token = getState().user.token;
			const response = await fetch(urlApiAddCourse, {
				method: 'POST',
				body: JSON.stringify(newCourse),
				headers: { 'Content-Type': 'application/json', Authorization: token },
			});
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const wholeCourseData = await response.json();
			dispatch(addCourse(wholeCourseData.result));
			history.push(urlRoutePathCourses);
		} catch (error) {
			alert(error);
		}
	};

export const deleteCourseFromServer = (id) => async (dispatch, getState) => {
	try {
		const token = getState().user.token;
		const response = await fetch(`${urlApiCourseWithoutId}/${id}`, {
			method: 'DELETE',
			headers: { Authorization: token },
		});
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		dispatch(deleteCourse(id));
	} catch (error) {
		alert(error);
	}
};

export const updateCourseOnServer =
	(newCourse, history, courseId) => async (dispatch, getState) => {
		try {
			const token = getState().user.token;
			const response = await fetch(`${urlApiCourseWithoutId}/${courseId}`, {
				method: 'PUT',
				body: JSON.stringify(newCourse),
				headers: { 'Content-Type': 'application/json', Authorization: token },
			});
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const wholeCourseData = await response.json();
			dispatch(updateCourse(wholeCourseData.result));
			history.push(urlRoutePathCourses);
		} catch (error) {
			alert(error);
		}
	};
