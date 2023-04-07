import { mockedCoursesList } from '../../constants';
import getTimeFromMins from '../../helpers/pipeDuration';
import { mockedAuthorsList } from '../../constants';

import { useParams, Link } from 'react-router-dom';

import './CourseInfo.css';

function CourseInfo() {
	const { courseId } = useParams();

	const courseCardInfo = mockedCoursesList.filter(
		(course) => course.id === courseId
	);

	return (
		<div className='coursesInfo__container'>
			<div>
				<Link to='/courses' className='courseInfo__back'>
					&#60; Back to courses
				</Link>
			</div>
			<h1 className='coursesInfo__title'>{courseCardInfo[0].title}</h1>
			<div className='coursesInfo__itemsContainer'>
				<div className='coursesInfo__description'>
					{courseCardInfo[0].description}
				</div>
				<div className='coursesInfo__items'>
					<div className='coursesInfo__item'>
						<b>ID: </b>
						{courseCardInfo[0].id}
					</div>
					<div className='coursesInfo__item'>
						<b>Duration: </b> {getTimeFromMins(courseCardInfo[0].duration)}
					</div>
					<div className='coursesInfo__item'>
						<b>Created: </b>
						{courseCardInfo[0].creationDate}
					</div>
					<div className='coursesInfo__item'>
						<b>Authors: </b>
						{courseCardInfo[0].authors.map((authorID) => (
							<div key={authorID} className='coursesInfo__item_author'>
								{mockedAuthorsList.find((author) => author.id === authorID)
									?.name || 'n/a'}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default CourseInfo;
