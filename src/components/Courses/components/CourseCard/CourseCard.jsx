import { useHistory } from 'react-router-dom';
import Button from '../../../../common/Button/Button.jsx';
import { BUTTON_TEXT } from '../../../../constants.js';
import getTimeFromMins from '../../../../helpers/pipeDuration.js';

import './CourseCard.css';
import propTypes from 'prop-types';

function CourseCard({
	id,
	title,
	description,
	duration,
	creationDate,
	convertedListOfAuthors,
}) {
	const history = useHistory();
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
				<div className='courseCard__button'>
					<Button
						text={BUTTON_TEXT}
						onClick={(e) => {
							e.preventDefault();
							history.push(`/courses/${id}`);
						}}
					/>
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
