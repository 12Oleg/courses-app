import propTypes from 'prop-types';

import './CreateAuthor.css';

import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import {
	AUTHOR_NAME_LABEL_TEXT,
	AUTHOR_NAME_PLACEHOLDER_TEXT,
	CREATE_AUTHOR_BUTTON_TEXT,
} from '../../../../constants';

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
					labelText={AUTHOR_NAME_LABEL_TEXT}
					type='text'
					placeholdetText={AUTHOR_NAME_PLACEHOLDER_TEXT}
					value={newAuthor}
					onChange={handleOnChangeNewAuthor}
				/>
			</div>
			<div className='createCourse__createAuthorButton'>
				<Button
					text={CREATE_AUTHOR_BUTTON_TEXT}
					onClick={handleOnClickCreateAuthor}
				/>
			</div>
		</>
	);
}

CreateAuthor.propTypes = {
	newAuthor: propTypes.string,
	handleOnChangeNewAuthor: propTypes.func,
	handleOnClickCreateAuthor: propTypes.func,
};
