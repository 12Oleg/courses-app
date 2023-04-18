import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';

import './Login.css';

import { fetchPostData } from '../../servisces';

import { logIn } from '../../store/user/actionCreators';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import {
	urlApiLogin,
	urlRoutePathCourses,
	urlRoutePathRegistration,
} from '../../url';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPasword] = useState('');

	const newUser = {
		password,
		email,
	};

	const history = useHistory();
	const dispatch = useDispatch();

	const registrationSubmit = async (event) => {
		event.preventDefault();
		try {
			const resultFetch = await fetchPostData(urlApiLogin, newUser);
			setEmail('');
			setPasword('');
			localStorage.setItem('userToken', resultFetch.result);
			localStorage.setItem('userName', resultFetch.user.name);
			localStorage.setItem('userEmail', resultFetch.user.email);
			dispatch(logIn(resultFetch));
			history.push(urlRoutePathCourses);
		} catch (error) {
			alert(error);
		}
	};

	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	const handleChangePassword = (e) => {
		setPasword(e.target.value);
	};

	return (
		<div className='login__container'>
			<div>
				<h2>Login</h2>
			</div>
			<form onSubmit={registrationSubmit}>
				<div className='login__bottom'>
					<Input
						value={email}
						type='email'
						autoComplete='username'
						labelText={'Email'}
						placeholdetText={'Enter email'}
						onChange={handleChangeEmail}
					/>
				</div>
				<div className='login__bottom'>
					<Input
						value={password}
						type='password'
						autoComplete='current-password'
						labelText={'Password'}
						placeholdetText={'Enter password'}
						onChange={handleChangePassword}
					/>
				</div>
				<div className='login__bottom login__button'>
					<Button text='Login' />
				</div>
			</form>
			<div className='login__text'>
				If you not have an account you can&nbsp;
				<Link to={urlRoutePathRegistration} className='login__link'>
					Registration
				</Link>
			</div>
		</div>
	);
}
Login.propTypes = {
	changeLoginStatus: propTypes.func,
};

export default Login;
