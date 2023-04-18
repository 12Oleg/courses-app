import propTypes from 'prop-types';

import './Header.css';

import Button from '../../common/Button/Button.jsx';
import { Logo } from './components/Logo';

function Header({ isAuth, userName, onLogout }) {
	return (
		<div className='header'>
			<Logo />
			<div className='header__buttonName'>
				{isAuth && (
					<>
						<div>
							<b>{userName}</b>
						</div>

						<div className='header__button'>
							<div>
								<Button text='Logout' onClick={onLogout} />
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

Header.propTypes = {
	isAuth: propTypes.bool,
	userName: propTypes.string,
	onLogout: propTypes.func,
};

export default Header;
