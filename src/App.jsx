import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import './App.css';

import { Header } from './components/Header';
import { Courses } from './components/Courses';
import { CreateCourse } from './components/CreateCourse';
import { Login } from './components/Login';
import { Registration } from './components/Registration';
import { CourseInfo } from './components/CourseInfo';
import { getIsAuth, getName } from './store/selectors.js';
import { getAuthorsAndCoursesFromServer } from './servisces.js';
import { getCourses } from './store/courses/actionCreators.js';
import { getAuthors } from './store/authors/actionCreators.js';
import {
	urlApiAuthors,
	urlApiCourses,
	urlRoutePathCourseInfo,
	urlRoutePathCourses,
	urlRoutePathCreateCourse,
	urlRoutePathLogin,
	urlRoutePathOthers,
	urlRoutePathRegistration,
} from './url';
import { logOut } from './store/user/actionCreators';

function App() {
	const isAuth = useSelector(getIsAuth);
	const userName = useSelector(getName);
	const dispatch = useDispatch();
	const history = useHistory();

	const handleHeaderOnLogout = (e) => {
		e.preventDefault();
		localStorage.removeItem('userToken');
		localStorage.removeItem('userName');
		localStorage.removeItem('userEmail');
		dispatch(logOut());
		history.push(urlRoutePathLogin);
	};

	useEffect(() => {
		getAuthorsAndCoursesFromServer(
			urlApiAuthors,
			getAuthors,
			urlApiCourses,
			getCourses
		);
	}, []);

	return (
		<div>
			<Header
				isAuth={isAuth}
				userName={userName}
				onLogout={handleHeaderOnLogout}
			/>

			<Switch>
				<Route path={urlRoutePathLogin} component={Login} />

				<Route path={urlRoutePathRegistration} component={Registration} />

				<Route path={urlRoutePathCreateCourse}>
					{isAuth ? <CreateCourse /> : <Redirect to={urlRoutePathLogin} />}
				</Route>

				<Route path={urlRoutePathCourseInfo}>
					{isAuth ? <CourseInfo /> : <Redirect to={urlRoutePathLogin} />}
				</Route>

				<Route path={urlRoutePathCourses}>
					{isAuth ? <Courses /> : <Redirect to={urlRoutePathLogin} />}
				</Route>

				<Route path={urlRoutePathOthers}>
					<Redirect to={urlRoutePathLogin} />
				</Route>
			</Switch>
		</div>
	);
}
export default App;
