import propTypes from 'prop-types';
import './Input.css';

const Input = ({
	labelText,
	value,
	placeholdetText,
	pattern,
	onChange,
	type,
	autoComplete,
}) => (
	<label className='inputlabel'>
		<div>{labelText}</div>
		<input
			className='inputfield'
			type={type}
			autoComplete={autoComplete}
			value={value}
			placeholder={placeholdetText}
			pattern={pattern}
			onChange={onChange}
		/>
	</label>
);

Input.propTypes = {
	labelText: propTypes.string,
	value: propTypes.oneOfType([propTypes.number, propTypes.string]),
	placeholdetText: propTypes.string,
	pattern: propTypes.string,
	onChange: propTypes.func,
	type: propTypes.string,
	autoComplete: propTypes.string,
};

export default Input;
