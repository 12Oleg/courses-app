import { checkCurrentUserData } from '../../servisces';
import {
	urlApiLogin,
	urlApiLogout,
	urlRoutePathCourses,
	urlRoutePathLogin,
} from '../../url';
import { logOutAuthors } from '../authors/actionCreators';
import { getAuthorsFromServer } from '../authors/thunk';
import { logOutCourses } from '../courses/actionCreators';
import { getCoursesFromServer } from '../courses/thunk';
import { logIn, logOut } from './actionCreators';

export const handleLogin = (newUser, history) => async (dispatch) => {
	try {
		const response = await fetch(urlApiLogin, {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();

		if (!response.ok) {
			if (result.errors) {
				throw new Error(result.errors);
			} else {
				throw new Error(result.result);
			}
		}
		localStorage.setItem('userToken', result.result);
		const userData = await checkCurrentUserData();
		if (userData === undefined) {
			return;
		}
		dispatch(logIn(userData));
		history.push(urlRoutePathCourses);
	} catch (error) {
		alert(error);
	}
};

export const checkUserAfterReloadOfPage = (history) => async (dispatch) => {
	try {
		const userData = await checkCurrentUserData();
		if (userData === undefined) {
			history.push(urlRoutePathLogin);
			return;
		}

		await dispatch(getAuthorsFromServer());
		await dispatch(getCoursesFromServer());
		dispatch(logIn(userData));
	} catch (error) {
		alert(error);
	}
};

export const handleLogout = (history) => async (dispatch, getState) => {
	try {
		const token = getState().user.token;
		const response = await fetch(urlApiLogout, {
			method: 'DELETE',
			headers: {
				Authorization: token,
			},
		});
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		dispatch(logOut());
		dispatch(logOutAuthors());
		dispatch(logOutCourses());
		localStorage.removeItem('userToken');
		history.push(urlRoutePathLogin);
	} catch (error) {
		alert(error);
	}
};
