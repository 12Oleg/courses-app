import { useSelector } from 'react-redux';
import propTypes from 'prop-types';

import './Header.css';

import Button from '../../common/Button/Button.jsx';
import { Logo } from './components/Logo';
import { LOGOUT_BUTTON_TEXT } from '../../constants';
import { getIsAuth, getName } from '../../store/selectors';

function Header({ onLogout }) {
	const isAuth = useSelector(getIsAuth);
	const userName = useSelector(getName);
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
								<Button text={LOGOUT_BUTTON_TEXT} onClick={onLogout} />
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

Header.propTypes = {
	onLogout: propTypes.func,
};

export default Header;
