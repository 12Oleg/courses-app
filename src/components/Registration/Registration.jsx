import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './Registration.css';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { handleRegistration } from '../../servisces';
import { urlRoutePathLogin } from '../../url';
import {
	EMAIL_LABEL_TEXT,
	EMAIL_PLACEHOLDER_TEXT,
	NAME_LABEL_TEXT,
	NAME_PLACEHOLDER_TEXT,
	PASSWORD_AUTOCOMPLETE_TEXT,
	PASSWORD_LABEL_TEXT,
	PASSWORD_PLACEHOLDER_TEXT,
	REGISTRATION_BUTTON_TEXT,
	USERNAME_AUTOCOMPLETE_TEXT,
} from '../../constants';

function Registration() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPasword] = useState('');
	const newUser = {
		name,
		password,
		email,
	};
	const history = useHistory();

	const registrationSubmit = async (event) => {
		event.preventDefault();
		try {
			await handleRegistration(newUser);
			setName('');
			setEmail('');
			setPasword('');
			history.push(urlRoutePathLogin);
		} catch (error) {
			alert(error);
		}
	};

	const handleChangeName = (e) => {
		setName(e.target.value);
	};

	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	const handleChangePassword = (e) => {
		setPasword(e.target.value);
	};

	return (
		<div className='registration__container'>
			<div>
				<h2>Registration</h2>
			</div>
			<form onSubmit={registrationSubmit}>
				<div className='registration__bottom'>
					<Input
						value={name}
						type='text'
						labelText={NAME_LABEL_TEXT}
						placeholdetText={NAME_PLACEHOLDER_TEXT}
						onChange={handleChangeName}
					/>
				</div>
				<div className='registration__bottom'>
					<Input
						value={email}
						type='email'
						autoComplete={USERNAME_AUTOCOMPLETE_TEXT}
						labelText={EMAIL_LABEL_TEXT}
						placeholdetText={EMAIL_PLACEHOLDER_TEXT}
						onChange={handleChangeEmail}
					/>
				</div>
				<div className='registration__bottom'>
					<Input
						value={password}
						type='password'
						autoComplete={PASSWORD_AUTOCOMPLETE_TEXT}
						labelText={PASSWORD_LABEL_TEXT}
						placeholdetText={PASSWORD_PLACEHOLDER_TEXT}
						onChange={handleChangePassword}
					/>
				</div>
				<div className='registration__bottom registration__button'>
					<Button text={REGISTRATION_BUTTON_TEXT} />
				</div>
			</form>
			<div className='registration__text'>
				If you have an account you can&nbsp;
				<Link to={urlRoutePathLogin} className='registration__link'>
					Login
				</Link>
			</div>
		</div>
	);
}
export default Registration;
