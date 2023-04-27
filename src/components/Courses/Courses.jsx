import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Courses.css';

import { CourseCard } from './components/CourseCard';
import { SearchBar } from './components/SearchBar';
import {
	getAuthorsSelector,
	getCoursesSelector,
} from '../../store/selectors.js';
import { useEffect } from 'react';
import { getAuthorsFromServer } from '../../store/authors/thunk';
import { getCoursesFromServer } from '../../store/courses/thunk';
import { NO_RESULT_MATCH_INFORMATION_TEXT } from '../../constants';

function Courses() {
	const getCoursesFromStore = useSelector(getCoursesSelector);
	const getAuthorsFromStore = useSelector(getAuthorsSelector);

	const [pattern, setPattern] = useState('');
	const inputSearch = (input) => setPattern(input);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAuthorsFromServer());
		dispatch(getCoursesFromServer());
	}, [dispatch]);

	function listOfAuthors(course) {
		return course.authors
			.map(
				(authorID) =>
					getAuthorsFromStore.find((author) => author.id === authorID)?.name ||
					'n/a'
			)
			.join(', ');
	}

	let filteredCourses;
	if (pattern) {
		filteredCourses = getCoursesFromStore.filter((course) => {
			return (
				course.title.toLowerCase().includes(pattern.toLowerCase()) ||
				course.id.toLowerCase().includes(pattern.toLowerCase())
			);
		});
	} else {
		filteredCourses = getCoursesFromStore;
	}

	return (
		<div className='courses__container'>
			<SearchBar inputSearch={inputSearch} />
			{!filteredCourses.length ? (
				<h3 className='courses__search-warning'>
					{NO_RESULT_MATCH_INFORMATION_TEXT}
				</h3>
			) : (
				<>
					{filteredCourses.map((course) => {
						const convertedListOfAuthors = listOfAuthors(course);
						return (
							<CourseCard
								key={course.id}
								course={course}
								id={course.id}
								title={course.title}
								description={course.description}
								duration={course.duration}
								creationDate={course.creationDate}
								convertedListOfAuthors={convertedListOfAuthors}
							/>
						);
					})}
				</>
			)}
		</div>
	);
}
export default Courses;
