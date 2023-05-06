import propTypes, { oneOfType } from 'prop-types';

import './CourseAuthors.css';
import Button from '../../../../common/Button/Button';
import {
	AUTHOR_LIST_EMPTY_INFORMATION_TEXT,
	DELETE_AUTHOR_BUTTON_TEXT,
} from '../../../../constants';

export function CourseAuthors({ courseAuthor, handleOnClickCourseAuthor }) {
	return (
		<>
			<div className='createCourse__courseAuthorsBlock'>
				<b>Course authors</b>
			</div>
			{!courseAuthor.length ? (
				<div className='createCourse__authorsMessageEmpty'>
					{AUTHOR_LIST_EMPTY_INFORMATION_TEXT}
				</div>
			) : (
				<>
					{courseAuthor.map((author) => {
						return (
							<div key={author.id} className='createCourse__authorBlock'>
								<div className='createCourse__authorName courseAuthor'>
									{author.name}
								</div>

								<div className='createCourse__authorButton'>
									<Button
										text={DELETE_AUTHOR_BUTTON_TEXT}
										onClick={(e) =>
											handleOnClickCourseAuthor(e, author.id, author)
										}
									/>
								</div>
							</div>
						);
					})}
				</>
			)}
		</>
	);
}

CourseAuthors.propTypes = {
	handleOnClickCourseAuthor: propTypes.func,
	courseAuthor: oneOfType([propTypes.array, propTypes.string]),
};
