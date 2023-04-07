import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import './Registration.css';

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
			const response = await fetch('http://localhost:4000/register', {
				method: 'POST',
				body: JSON.stringify(newUser),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const result = await response.json();
			if (!response.ok) {
				throw new Error(result.errors);
			}
			setName('');
			setEmail('');
			setPasword('');
			history.push('/login');
		} catch (error) {
			alert(error);
		}
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
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className='registration__bottom'>
					<Input
						value={email}
						type='email'
						autoComplete='username'
						labelText={'Email'}
						placeholdetText={'Enter email'}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='registration__bottom'>
					<Input
						value={password}
						type='password'
						autoComplete='current-password'
						labelText={'Password'}
						placeholdetText={'Enter password'}
						onChange={(e) => setPasword(e.target.value)}
					/>
				</div>
				<div className='registration__bottom registration__button'>
					<Button text='Registration' />
				</div>
			</form>
			<div className='registration__text'>
				If you have an account you can&nbsp;
				<Link to='/login' className='registration__link'>
					Login
				</Link>
			</div>
		</div>
	);
}
export default Registration;
