import propTypes from 'prop-types';

import './Authors.css';

import Button from '../../../../common/Button/Button';
import { ADD_AUTHOR_BUTTON_TEXT } from '../../../../constants';

export function Authors({ authors, handleOnClickAuthors }) {
	return (
		<>
			<div className='createCourse__authorsBlockTitle'>
				<b>Authors</b>
			</div>

			{authors.map((author) => {
				return (
					<div key={author.id} className='createCourse__authorBlock'>
						<div className='createCourse__authorName'>{author.name}</div>

						<div className='createCourse__authorButton'>
							<Button
								text={ADD_AUTHOR_BUTTON_TEXT}
								onClick={(e) => handleOnClickAuthors(e, author.id, author)}
							/>
						</div>
					</div>
				);
			})}
		</>
	);
}

Authors.propTypes = {
	authors: propTypes.array,
	handleOnClickAuthors: propTypes.func,
};
