import propTypes from 'prop-types';

import './Description.css';

export function Description({
	description,
	handleOnChangeDescription,
	handleonBlurDescription,
}) {
	return (
		<section className='createCourse_description'>
			<label>
				<div>Description</div>
				<textarea
					className='createCourse_textarea'
					rows='6'
					placeholder={'Enter description'}
					value={description}
					onChange={handleOnChangeDescription}
					onBlur={handleonBlurDescription}
				/>
			</label>
		</section>
	);
}

Description.propTypes = {
	description: propTypes.string,
	handleOnChangeDescription: propTypes.func,
	handleonBlurDescription: propTypes.func,
};
