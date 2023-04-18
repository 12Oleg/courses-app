import propTypes from 'prop-types';

import './Button.css';

const Button = ({ text, onClick, customClass }) => {
	const defaultClass = 'button';
	const className = customClass ? customClass : defaultClass;
	return (
		<button className={className} onClick={onClick}>
			{text}
		</button>
	);
};

Button.propTypes = {
	text: propTypes.string,
	onclick: propTypes.func,
	customClass: propTypes.string,
};

export default Button;
