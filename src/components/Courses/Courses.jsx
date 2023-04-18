import { useState } from 'react';
import { useSelector } from 'react-redux';

import './Courses.css';

import { CourseCard } from './components/CourseCard';
import { SearchBar } from './components/SearchBar';
import { getAuthorsSelecor, getCoursesSelecor } from '../../store/selectors.js';

function Courses() {
	const getCoursesFromStore = useSelector(getCoursesSelecor);
	const getAuthorsFromStore = useSelector(getAuthorsSelecor);

	const [pattern, setPattern] = useState('');
	const inputSearch = (input) => setPattern(input);

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
				<h3 className='courses__search-warning'>Result: no match</h3>
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
