import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import './Login.css';
import propTypes from 'prop-types';

function Login({ changeLoginStatus }) {
	const [email, setEmail] = useState('');
	const [password, setPasword] = useState('');

	const newUser = {
		password,
		email,
	};
	const history = useHistory();
	const registrationSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await fetch('http://localhost:4000/login', {
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
			setEmail('');
			setPasword('');

			localStorage.setItem('userToken', result.result);
			localStorage.setItem('userName', result.user.name);
			changeLoginStatus();
			history.push('/courses');
		} catch (error) {
			alert(error);
		}
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
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='login__bottom'>
					<Input
						value={password}
						type='password'
						autoComplete='current-password'
						labelText={'Password'}
						placeholdetText={'Enter password'}
						onChange={(e) => setPasword(e.target.value)}
					/>
				</div>
				<div className='login__bottom login__button'>
					<Button text='Login' />
				</div>
			</form>
			<div className='login__text'>
				If you not have an account you can&nbsp;
				<Link to='/registration' className='login__link'>
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
