import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';

import './CourseCard.css';

import {
	urlRoutePathCourses,
	urlRoutePathUpdateCourseWithoutId,
} from '../../../../url.js';
import Button from '../../../../common/Button/Button.jsx';
import { SHOW_COURSE_BUTTON_TEXT } from '../../../../constants.js';
import { getTimeFromMins } from '../../../../helpers';
import { getRole } from '../../../../store/selectors';
import { deleteCourseFromServer } from '../../../../store/courses/thunk';

function CourseCard({
	id,
	title,
	description,
	duration,
	creationDate,
	convertedListOfAuthors,
}) {
	const history = useHistory();
	const dispatch = useDispatch();
	const userRole = useSelector(getRole);

	const handleOnClickShowCourse = (e) => {
		e.preventDefault();
		history.push(`${urlRoutePathCourses}/${id}`);
	};

	const handleOnClickUpdateCourse = (e) => {
		e.preventDefault();
		history.push(`${urlRoutePathUpdateCourseWithoutId}/${id}`);
	};

	const handleOnClickDeleteCourse = (e) => {
		e.preventDefault();
		dispatch(deleteCourseFromServer(id));
	};

	return (
		<div className='courseCard__container'>
			<div className='courseCard__first-part'>
				<h1 className='h1'>{title}</h1>
				<div>{description}</div>
			</div>
			<div className='courseCard__second-part'>
				<div className='authors_line'>
					<b>Authors: </b>
					{convertedListOfAuthors}
				</div>
				<div>
					<b>Duration: </b>
					{getTimeFromMins(duration)}
				</div>
				<div>
					<b>Created: </b>
					{creationDate}
				</div>
				<div className='courseCard__buttons'>
					<div>
						<Button
							text={SHOW_COURSE_BUTTON_TEXT}
							onClick={handleOnClickShowCourse}
						/>
					</div>

					{userRole === 'admin' && (
						<div>
							<Button
								customClass='courseCard__small-button-update'
								onClick={handleOnClickUpdateCourse}
							/>
						</div>
					)}

					{userRole === 'admin' && (
						<div>
							<Button
								customClass='courseCard__small-button-delete'
								onClick={handleOnClickDeleteCourse}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

CourseCard.propTypes = {
	id: propTypes.string,
	title: propTypes.string,
	description: propTypes.string,
	duration: propTypes.number,
	creationDate: propTypes.string,
	convertedListOfAuthors: propTypes.string,
};

export default CourseCard;
