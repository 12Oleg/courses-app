import propTypes, { oneOfType } from 'prop-types';

import './Details.css';

import { CreateAuthor } from './CreateAuthor';
import { Duration } from './Duration';
import { Authors } from './Authors';
import { CourseAuthors } from './CourseAuthors';

export function Details({
	newAuthor,
	duration,
	handleOnChangeNewAuthor,
	handleOnClickCreateAuthor,
	handleOnChangeDuration,
	authors,
	courseAuthor,
	setCourseAuthor,
	setAuthors,
}) {
	const addAuthorToCourse = (authorId) => {
		setAuthors(authors.filter((author) => author.id !== authorId));
	};

	const deleteAuthor = (authorId) => {
		setCourseAuthor(courseAuthor.filter((author) => author.id !== authorId));
	};

	const handleOnClickAuthors = (e, authorid, author) => {
		e.preventDefault();
		addAuthorToCourse(authorid);
		setCourseAuthor([...courseAuthor, author]);
	};

	const handleOnClickCourseAuthor = (e, authorid, author) => {
		e.preventDefault();
		deleteAuthor(authorid);
		setAuthors([...authors, author]);
	};

	return (
		<section className='createCourse__details'>
			<div className='createCourse__authorsAddAndDuration'>
				<CreateAuthor
					{...{
						newAuthor,
						handleOnChangeNewAuthor,
						handleOnClickCreateAuthor,
					}}
				/>

				<Duration {...{ duration, handleOnChangeDuration }} />
			</div>

			<div className='createCourse__authorsBlock'>
				<Authors {...{ authors, handleOnClickAuthors }} />

				<CourseAuthors {...{ courseAuthor, handleOnClickCourseAuthor }} />
			</div>
		</section>
	);
}

Details.propTypes = {
	newAuthor: propTypes.string,
	duration: oneOfType([propTypes.number, propTypes.string]),
	handleOnChangeNewAuthor: propTypes.func,
	handleOnClickCreateAuthor: propTypes.func,
	handleOnChangeDuration: propTypes.func,
	authors: propTypes.array,
	courseAuthor: oneOfType([propTypes.array, propTypes.string]),
	setCourseAuthor: propTypes.func,
	setAuthors: propTypes.func,
};
