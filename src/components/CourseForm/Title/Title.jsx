import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import propTypes, { oneOfType } from 'prop-types';

import './Title.css';

import Input from '../../../common/Input/Input';
import Button from '../../../common/Button/Button';
import { useDispatch } from 'react-redux';
import { todayDate } from '../../../helpers';
import {
	addCourseToServer,
	updateCourseOnServer,
} from '../../../store/courses/thunk';
import {
	CREATE_COURSE_BUTTON_TEXT,
	FILL_FIELDS_ALERT_TEXT,
	TITLE_LABEL_TEXT,
	TITLE_PLACEHOLDER_TEXT,
	UPDATE_COURSE_BUTTON_TEXT,
} from '../../../constants';

export function Title({
	description,
	duration,
	courseAuthor,
	courseForUpdate,
	courseId,
}) {
	const [title, setTitle] = useState(
		courseForUpdate ? courseForUpdate.title : ''
	);
	const history = useHistory();
	const dispatch = useDispatch();

	const handleOnClick = (e) => {
		if (title.trim() && description && duration && courseAuthor) {
			e.preventDefault();
			const newCourse = {
				title: title,
				description: description,
				creationDate: todayDate,
				duration: duration,
				authors: courseAuthor.map((author) => author.id),
			};
			courseForUpdate
				? dispatch(updateCourseOnServer(newCourse, history, courseId))
				: dispatch(addCourseToServer(newCourse, history));
		} else {
			alert(FILL_FIELDS_ALERT_TEXT);
		}
	};

	const handleOnChange = (e) => {
		setTitle(e.target.value);
	};

	return (
		<section className='createCourse__title'>
			<Input
				labelText={TITLE_LABEL_TEXT}
				type='text'
				placeholdetText={TITLE_PLACEHOLDER_TEXT}
				value={title}
				onChange={handleOnChange}
			/>

			<Button
				onClick={handleOnClick}
				text={
					courseForUpdate
						? UPDATE_COURSE_BUTTON_TEXT
						: CREATE_COURSE_BUTTON_TEXT
				}
			/>
		</section>
	);
}
Title.propTypes = {
	description: propTypes.string,
	duration: oneOfType([propTypes.number, propTypes.string]),
	courseAuthor: oneOfType([propTypes.array, propTypes.string]),
	courseForUpdate: propTypes.object,
	courseId: propTypes.string,
};
