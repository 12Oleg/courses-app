import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';

import './Login.css';

import { handleLogin } from '../../store/user/thunk';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { urlRoutePathRegistration } from '../../url';
import {
	EMAIL_LABEL_TEXT,
	EMAIL_PLACEHOLDER_TEXT,
	LOGIN_BUTTON_TEXT,
	PASSWORD_AUTOCOMPLETE_TEXT,
	PASSWORD_LABEL_TEXT,
	PASSWORD_PLACEHOLDER_TEXT,
	USERNAME_AUTOCOMPLETE_TEXT,
} from '../../constants';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPasword] = useState('');

	const newUser = {
		password,
		email,
	};

	const history = useHistory();
	const dispatch = useDispatch();

	const logInSubmit = (event) => {
		event.preventDefault();
		setEmail('');
		setPasword('');
		dispatch(handleLogin(newUser, history));
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
			<form onSubmit={logInSubmit}>
				<div className='login__bottom'>
					<Input
						value={email}
						type='email'
						autoComplete={USERNAME_AUTOCOMPLETE_TEXT}
						labelText={EMAIL_LABEL_TEXT}
						placeholdetText={EMAIL_PLACEHOLDER_TEXT}
						onChange={handleChangeEmail}
					/>
				</div>
				<div className='login__bottom'>
					<Input
						value={password}
						type='password'
						autoComplete={PASSWORD_AUTOCOMPLETE_TEXT}
						labelText={PASSWORD_LABEL_TEXT}
						placeholdetText={PASSWORD_PLACEHOLDER_TEXT}
						onChange={handleChangePassword}
					/>
				</div>
				<div className='login__bottom login__button'>
					<Button text={LOGIN_BUTTON_TEXT} />
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
