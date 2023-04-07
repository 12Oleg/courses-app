import Header from './components/Header/Header.jsx';
import Courses from './components/Courses/Courses.jsx';
import CreateCourse from './components/CreateCourse/CreateCourse.jsx';
import Login from './components/Login/Login.jsx';
import Registration from './components/Registration/Registration.jsx';
import CourseInfo from './components/CourseInfo/CourseInfo.jsx';

import './App.css';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useState } from 'react';

function App() {
	const [showUserName, setShowUserName] = useState('');

	function changeLoginStatus() {
		setShowUserName(!showUserName);
	}

	const token = () => localStorage.getItem('userToken');
	const userName = () => localStorage.getItem('userName');

	return (
		<BrowserRouter>
			<div>
				<Header
					token={token()}
					userName={userName()}
					changeLoginStatus={changeLoginStatus}
				/>
				<Switch>
					<Route path='/login'>
						<Login changeLoginStatus={changeLoginStatus} />
					</Route>
					<Route path='/registration' component={Registration} />

					<Route path='/courses/add'>
						{token() ? <CreateCourse /> : <Redirect to={'/login'} />}
					</Route>

					<Route path='/courses/:courseId'>
						{token() ? <CourseInfo /> : <Redirect to={'/login'} />}
					</Route>
					<Route path='/courses'>
						{token() ? <Courses /> : <Redirect to={'/login'} />}
					</Route>

					<Route path='/'>
						<Redirect to={'/login'} />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}
export default App;
