import propTypes, { oneOfType } from 'prop-types';

import './Duration.css';

import Input from '../../../../common/Input/Input';
import { getTimeFromMins } from '../../../../helpers';

export function Duration({ duration, handleOnChangeDuration }) {
	return (
		<>
			<div className='createCourse__durationBlock'>
				<b>Duration</b>
			</div>
			<div>
				<div>
					<Input
						labelText={'Duration'}
						type='text'
						placeholdetText={'Enter duration in minutes...'}
						value={duration}
						onChange={handleOnChangeDuration}
					/>
				</div>
				<div className='createCourse__durationFormatted'>
					Duration:<b>{getTimeFromMins(duration)}</b>
				</div>
			</div>
		</>
	);
}

Duration.propTypes = {
	duration: oneOfType([propTypes.number, propTypes.string]),
	handleOnChangeDuration: propTypes.func,
};
