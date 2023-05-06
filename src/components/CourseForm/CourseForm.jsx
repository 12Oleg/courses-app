import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './CourseForm.css';

import { getAuthorsSelector, getCoursesSelector } from '../../store/selectors';
import { Title } from './Title';
import { Description } from './Description';
import { Details } from './Details';
import { addAuthorToServer } from '../../store/authors/thunk';
import {
	AUTHOR_NAME_LENGTH_ALERT_TEXT,
	NO_COURSE_FOUND_INFORMATION_TEXT,
	TEXT_LENGTH_ALERT_TEXT,
} from '../../constants';

function CourseForm() {
	const { courseId } = useParams();
	const getAuthorsFromStore = useSelector(getAuthorsSelector);
	const getCoursesFromStore = useSelector(getCoursesSelector);
	let courseForUpdate;
	if (courseId) {
		courseForUpdate = getCoursesFromStore.find(
			(course) => course.id === courseId
		);
	}

	const dispatch = useDispatch();
	const [newAuthor, setNewAuthor] = useState('');
	const authorsToChooseForUpdetedCourse = (authors) => {
		const result = getAuthorsFromStore.filter(
			(author) => !authors.includes(author.id)
		);
		return result;
	};
	const [authors, setAuthors] = useState(
		courseForUpdate
			? authorsToChooseForUpdetedCourse(courseForUpdate.authors)
			: getAuthorsFromStore
	);

	const courseAuthorsForUpdetedCourse = (authors) => {
		const result = getAuthorsFromStore.filter((author) =>
			authors.includes(author.id)
		);
		return result;
	};
	const [courseAuthor, setCourseAuthor] = useState(
		courseForUpdate
			? courseAuthorsForUpdetedCourse(courseForUpdate.authors)
			: ''
	);

	const [description, setDescription] = useState(
		courseForUpdate ? courseForUpdate.description : ''
	);
	const [duration, setDuration] = useState(
		courseForUpdate ? courseForUpdate.duration : ''
	);

	const handleOnChangeDescription = (e) => {
		setDescription(e.target.value);
	};

	const handleonBlurDescription = (e) => {
		if (e.target.value.trim().length <= 1) {
			alert(TEXT_LENGTH_ALERT_TEXT);
			setDescription('');
		}
	};

	const handleOnChangeNewAuthor = (e) => {
		setNewAuthor(e.target.value);
	};

	const handleOnClickCreateAuthor = (e) => {
		e.preventDefault();
		if (newAuthor.trim().length <= 1) {
			alert(AUTHOR_NAME_LENGTH_ALERT_TEXT);
			return;
		}
		const createdAuthor = { name: newAuthor };
		dispatch(
			addAuthorToServer(createdAuthor, authors, setAuthors, setNewAuthor)
		);
	};

	const handleOnChangeDuration = (e) => {
		if (/^[1-9][0-9]*$/.test(e.target.value)) {
			setDuration(+e.target.value);
		}
		if (!e.target.value) setDuration(e.target.value);
	};

	if (courseForUpdate || !courseId) {
		return (
			<div className='createCourse__container'>
				<Title
					{...{
						description,
						duration,
						courseAuthor,
						courseForUpdate,
						courseId,
					}}
				/>

				<Description
					{...{
						description,
						handleOnChangeDescription,
						handleonBlurDescription,
					}}
				/>

				<Details
					{...{
						newAuthor,
						duration,
						handleOnChangeNewAuthor,
						handleOnClickCreateAuthor,
						handleOnChangeDuration,
						authors,
						courseAuthor,
						setCourseAuthor,
						setAuthors,
					}}
				/>
			</div>
		);
	} else {
		return <h2>{NO_COURSE_FOUND_INFORMATION_TEXT}</h2>;
	}
}
export default CourseForm;
