import propTypes, { oneOfType } from 'prop-types';

import './CourseAuthors.css';
import Button from '../../../../common/Button/Button';

export function CourseAuthors({ courseAuthor, handleOnClickCourseAuthor }) {
	return (
		<>
			<div className='createCourse__courseAuthorsBlock'>
				<b>Course authors</b>
			</div>
			{!courseAuthor.length ? (
				<div className='createCourse__authorsMessageEmpty'>
					Author list is empty
				</div>
			) : (
				<>
					{courseAuthor.map((author) => {
						return (
							<div key={author.id} className='createCourse__authorBlock'>
								<div className='createCourse__authorName'>{author.name}</div>

								<div className='createCourse__authorButton'>
									<Button
										text='Delete author'
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
