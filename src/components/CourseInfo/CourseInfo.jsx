import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthorsSelector, getCoursesSelector } from '../../store/selectors';

import './CourseInfo.css';

import { getTimeFromMins } from '../../helpers';
import { urlRoutePathCourses } from '../../url';
import { NO_COURSE_FOUND_INFORMATION_TEXT } from '../../constants';

function CourseInfo() {
	const { courseId } = useParams();
	const getCoursesFromStore = useSelector(getCoursesSelector);
	const getAuthorsFromStore = useSelector(getAuthorsSelector);
	const courseCardInfo = getCoursesFromStore.find(
		(course) => course.id === courseId
	);
	if (courseCardInfo) {
		return (
			<div className='coursesInfo__container'>
				<div>
					<Link to={urlRoutePathCourses} className='courseInfo__back'>
						&#60; Back to courses
					</Link>
				</div>
				<h1 className='coursesInfo__title'>{courseCardInfo.title}</h1>
				<div className='coursesInfo__itemsContainer'>
					<div className='coursesInfo__description'>
						{courseCardInfo.description}
					</div>
					<div className='coursesInfo__items'>
						<div className='coursesInfo__item'>
							<b>ID: </b>
							{courseCardInfo.id}
						</div>
						<div className='coursesInfo__item'>
							<b>Duration: </b> {getTimeFromMins(courseCardInfo.duration)}
						</div>
						<div className='coursesInfo__item'>
							<b>Created: </b>
							{courseCardInfo.creationDate}
						</div>
						<div className='coursesInfo__item'>
							<b>Authors: </b>
							{courseCardInfo.authors.map((authorID) => (
								<div key={authorID} className='coursesInfo__item_author'>
									{getAuthorsFromStore.find((author) => author.id === authorID)
										?.name || 'n/a'}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <h2>{NO_COURSE_FOUND_INFORMATION_TEXT}</h2>;
	}
}

export default CourseInfo;
