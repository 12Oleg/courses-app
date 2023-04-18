import propTypes from 'prop-types';

import './CreateAuthor.css';

import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
export function CreateAuthor({
	newAuthor,
	handleOnChangeNewAuthor,
	handleOnClickCreateAuthor,
}) {
	return (
		<>
			<div className='createCourse__addAuthorBlock'>
				<b>Add author</b>
			</div>
			<div>
				<Input
					labelText={'Author name'}
					type='text'
					placeholdetText={'Enter author name...'}
					value={newAuthor}
					onChange={handleOnChangeNewAuthor}
				/>
			</div>
			<div className='createCourse__createAuthorButton'>
				<Button text='Create author' onClick={handleOnClickCreateAuthor} />
			</div>
		</>
	);
}

CreateAuthor.propTypes = {
	newAuthor: propTypes.string,
	handleOnChangeNewAuthor: propTypes.func,
	handleOnClickCreateAuthor: propTypes.func,
};
