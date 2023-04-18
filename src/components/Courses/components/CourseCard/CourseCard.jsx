import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';

import './CourseCard.css';

import { deleteCourse } from '../../../../store/courses/actionCreators.js';
import { urlRoutePathCourses } from '../../../../url.js';
import Button from '../../../../common/Button/Button.jsx';
import { BUTTON_TEXT } from '../../../../constants.js';
import { getTimeFromMins } from '../../../../helpers';

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
							text={BUTTON_TEXT}
							onClick={(e) => {
								e.preventDefault();
								history.push(`${urlRoutePathCourses}/${id}`);
							}}
						/>
					</div>
					<div>
						<Button customClass='courseCard__small-button-update' />
					</div>
					<div>
						<Button
							customClass='courseCard__small-button-delete'
							onClick={(e) => {
								e.preventDefault();
								dispatch(deleteCourse(id));
							}}
						/>
					</div>
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
