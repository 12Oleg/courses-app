import propTypes from 'prop-types';
import './Button.css';
const Button = ({ text, onClick }) => (
	<button className='button' onClick={onClick}>
		{text}
	</button>
);

Button.propTypes = {
	text: propTypes.string,
	onclick: propTypes.func,
};

export default Button;
