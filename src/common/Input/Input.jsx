import classes from './Input.module.css';

const Input = ({
	labelText,
	value,
	placeholdetText,
	pattern,
	onChange,
	type,
}) => (
	<label className={classes.inputlabel}>
		<div>{labelText}</div>
		<input
			className={classes.inputfield}
			type={type}
			value={value}
			placeholder={placeholdetText}
			pattern={pattern}
			onChange={onChange}
		/>
	</label>
);
export default Input;
