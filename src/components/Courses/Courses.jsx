import CourseCard from './components/CourseCard/CourseCard.jsx';
import { mockedCoursesList } from '../../constants';
import { mockedAuthorsList } from '../../constants';
import SearchBar from './components/SearchBar/SearchBar.jsx';

import './Courses.css';
import { useState } from 'react';

function Courses({ showAnotherTab }) {
	const [pattern, setPattern] = useState('');
	const inputSearch = (input) => setPattern(input);
	let filteredCourses;
	if (pattern) {
		filteredCourses = mockedCoursesList.filter((course) => {
			return (
				course.title.toLowerCase().includes(pattern.toLowerCase()) ||
				course.id.toLowerCase().includes(pattern.toLowerCase())
			);
		});
	} else {
		filteredCourses = mockedCoursesList;
	}

	return (
		<div className='courses__container'>
			<SearchBar inputSearch={inputSearch} showAnotherTab={showAnotherTab} />
			{!filteredCourses.length ? (
				<div style={{ fontSize: '15px', color: 'red' }}>Result: no match</div>
			) : (
				<>
					{filteredCourses.map((course) => {
						const listOfAuthors = course.authors
							.map(
								(authorID) =>
									mockedAuthorsList.find((author) => author.id === authorID)
										?.name || 'n/a'
							)
							.join(', ');

						return (
							<CourseCard
								key={course.id}
								course={course}
								listOfAuthors={listOfAuthors}
							/>
						);
					})}
				</>
			)}
		</div>
	);
}
export default Courses;
