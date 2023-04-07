import CourseCard from './components/CourseCard/CourseCard.jsx';
import { mockedCoursesList } from '../../constants';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import listOfAuthors from '../../helpers/listOfAuthors.js';

import './Courses.css';
import { useState } from 'react';

function Courses() {
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
			<SearchBar inputSearch={inputSearch} />
			{!filteredCourses.length ? (
				<div style={{ fontSize: '15px', color: 'red' }}>Result: no match</div>
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
