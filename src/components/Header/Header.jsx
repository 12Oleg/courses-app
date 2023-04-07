import { useHistory } from 'react-router-dom';
import Button from '../../common/Button/Button.jsx';
import Logo from './components/Logo/Logo.jsx';

import './Header.css';
import propTypes from 'prop-types';

function Header({ token, userName, changeLoginStatus }) {
	const history = useHistory();
	return (
		<div className='header'>
			<Logo />
			<div className='header-name-button'>
				{token && (
					<>
						<div>
							<b>{userName}</b>
						</div>

						<div className='header__button'>
							<div>
								<Button
									text='Logout'
									onClick={(e) => {
										e.preventDefault();
										localStorage.removeItem('userToken');
										localStorage.removeItem('userName');
										changeLoginStatus();
										history.push(`/login`);
									}}
								/>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

Header.propTypes = {
	token: propTypes.string,
	showUserName: propTypes.string,
	changeLoginStatus: propTypes.func,
};

export default Header;
