import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import propTypes, { oneOfType } from 'prop-types';

import './Title.css';

import Input from '../../../common/Input/Input';
import Button from '../../../common/Button/Button';
import { useDispatch } from 'react-redux';
import { todayDate } from '../../../helpers';
import { addCourse } from '../../../store/courses/actionCreators';
import { urlRoutePathCourses } from '../../../url';

export function Title({ description, duration, courseAuthor }) {
	const [title, setTitle] = useState('');
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
				id: uuidv4(),
			};
			dispatch(addCourse(newCourse));
			history.push(urlRoutePathCourses);
		} else {
			alert('Please, fill in all fields');
		}
	};

	const handleOnChange = (e) => {
		setTitle(e.target.value);
	};

	return (
		<section className='createCourse__title'>
			<Input
				labelText={'Title'}
				type='text'
				placeholdetText={'Enter title...'}
				value={title}
				onChange={handleOnChange}
			/>

			<Button text='Create Course' onClick={handleOnClick} />
		</section>
	);
}
Title.propTypes = {
	description: propTypes.string,
	duration: oneOfType([propTypes.number, propTypes.string]),
	courseAuthor: oneOfType([propTypes.array, propTypes.string]),
};
