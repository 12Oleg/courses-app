import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import './CreateCourse.css';

import { getAuthorsSelecor } from '../../store/selectors';
import { addAuthor } from '../../store/authors/actionCreators';
import { Title } from './Title';
import { Description } from './Description';
import { Details } from './Details';

function CreateCourse() {
	const dispatch = useDispatch();
	const getAuthorsFromStore = useSelector(getAuthorsSelecor);

	const initialFetchAuthorsList = () => {
		const initialFetchAuthors = [...getAuthorsFromStore];
		return initialFetchAuthors;
	};
	const [authors, setAuthors] = useState(() => initialFetchAuthorsList());
	const [newAuthor, setNewAuthor] = useState('');
	const [courseAuthor, setCourseAuthor] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState('');

	const handleOnChangeDescription = (e) => {
		setDescription(e.target.value);
	};

	const handleonBlurDescription = (e) => {
		if (e.target.value.trim().length <= 1) {
			alert('Text length should be at least 2 characters');
			setDescription('');
		}
	};

	const handleOnChangeNewAuthor = (e) => {
		setNewAuthor(e.target.value);
	};

	const handleOnClickCreateAuthor = (e) => {
		e.preventDefault();
		if (newAuthor.trim().length <= 1) {
			alert('Author name length should be at least 2 characters');
			return;
		}
		const newAuthorId = uuidv4();
		const createdAuthor = { name: newAuthor, id: newAuthorId };
		dispatch(addAuthor(createdAuthor));
		setAuthors([...authors, { id: newAuthorId, name: newAuthor }]);
		setNewAuthor('');
	};

	const handleOnChangeDuration = (e) => {
		if (/^[1-9][0-9]*$/.test(e.target.value)) {
			setDuration(+e.target.value);
		}
		if (!e.target.value) setDuration(e.target.value);
	};

	return (
		<div className='createCourse__container'>
			<Title {...{ description, duration, courseAuthor }} />

			<Description
				{...{ description, handleOnChangeDescription, handleonBlurDescription }}
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
}
export default CreateCourse;
