import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './Registration.css';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { fetchPostData } from '../../servisces';
import { urlApiRegistration, urlRoutePathLogin } from '../../url';

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
			await fetchPostData(urlApiRegistration, newUser);
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
						labelText={'Name'}
						placeholdetText={'Enter name'}
						onChange={handleChangeName}
					/>
				</div>
				<div className='registration__bottom'>
					<Input
						value={email}
						type='email'
						autoComplete='username'
						labelText={'Email'}
						placeholdetText={'Enter email'}
						onChange={handleChangeEmail}
					/>
				</div>
				<div className='registration__bottom'>
					<Input
						value={password}
						type='password'
						autoComplete='current-password'
						labelText={'Password'}
						placeholdetText={'Enter password'}
						onChange={handleChangePassword}
					/>
				</div>
				<div className='registration__bottom registration__button'>
					<Button text='Registration' />
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
