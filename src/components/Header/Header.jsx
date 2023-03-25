import Button from '../../common/Button/Button.jsx';
import Logo from './components/Logo/Logo.jsx';

import './Header.css';

function Header() {
	return (
		<div className='header'>
			<Logo />
			<div className='header-name-button'>
				<div>Dave</div>

				<div className='header__button'>
					<Button text='Logout' />
				</div>
			</div>
		</div>
	);
}
export default Header;
