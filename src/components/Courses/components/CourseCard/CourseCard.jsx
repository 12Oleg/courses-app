import Button from '../../../../common/Button/Button.jsx';
import { BUTTON_TEXT } from '../../../../constants.js';
import getTimeFromMins from '../../../../helpers/pipeDuration.js';

import './CourseCard.css';

function CourseCard(props) {
	const { title, description, duration, creationDate } = props.course;

	return (
		<div className='courseCard__container'>
			<div className='courseCard__first-part'>
				<h1 className='h1'>{title}</h1>
				<div>{description}</div>
			</div>
			<div className='courseCard__second-part'>
				<div className='authors_line'>
					<b>Authors: </b>
					{props.listOfAuthors}
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
					<Button text={BUTTON_TEXT} />
				</div>
			</div>
		</div>
	);
}
export default CourseCard;
