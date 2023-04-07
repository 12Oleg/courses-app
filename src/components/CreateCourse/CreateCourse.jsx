import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { mockedAuthorsList } from '../../constants';
import { mockedCoursesList } from '../../constants';
import todayDate from '../../helpers/dateGeneratop';
import getTimeFromMins from '../../helpers/pipeDuration';

import './CreateCourse.css';

function CreateCourse({ showAnotherTab }) {
	const initialFetchAuthorsList = () => {
		const initialFetchAuthors = [...mockedAuthorsList];
		return initialFetchAuthors;
	};
	const [authors, setAuthors] = useState(() => initialFetchAuthorsList());
	const [newAuthor, setNewAuthor] = useState('');
	const [courseAuthor, setCourseAuthor] = useState('');
	const [description, setDescription] = useState('');
	const [title, setTitle] = useState('');
	const [duration, setDuration] = useState('');

	const addAuthor = (authorId) => {
		setAuthors(authors.filter((author) => author.id !== authorId));
	};
	const deleteAuthor = (authorId) => {
		setCourseAuthor(courseAuthor.filter((author) => author.id !== authorId));
	};

	return (
		<div className='createCourse__container'>
			<section className='createCourse__title'>
				<Input
					labelText={'Title'}
					type='text'
					placeholdetText={'Enter title...'}
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<Button
					text='Create Course'
					onClick={(e) => {
						if (title.trim() && description && duration && courseAuthor) {
							e.preventDefault();
							mockedCoursesList.push({
								id: uuidv4(),
								title: title,
								description: description,
								creationDate: todayDate,
								duration: duration,
								authors: courseAuthor.map((author) => author.id),
							});
							showAnotherTab();
						} else {
							alert('Please, fill in all fields');
						}
					}}
				/>
			</section>
			<section className='createCourse_description'>
				<label>
					<div>Description</div>
					<textarea
						style={{ width: '100%' }}
						rows='6'
						placeholder={'Enter description'}
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						onBlur={(e) => {
							if (description.trim().length <= 1) {
								alert('Text length should be at least 2 characters');
								setDescription('');
							}
						}}
					/>
				</label>
			</section>
			<section className='createCourse__authors'>
				<div className='createCourse__authors_add'>
					<div style={{ marginBottom: '15px' }}>
						<b>Add author</b>
					</div>
					<div>
						<Input
							labelText={'Author name'}
							type='text'
							placeholdetText={'Enter author name...'}
							value={newAuthor}
							onChange={(e) => setNewAuthor(e.target.value)}
						/>
					</div>
					<div style={{ margin: '10px' }}>
						<Button
							text='Create author'
							onClick={(e) => {
								function checkAuthorNameField() {
									e.preventDefault();
									const newAuthorId = uuidv4();
									mockedAuthorsList.push({ id: newAuthorId, name: newAuthor });
									setAuthors([
										...authors,
										{ id: newAuthorId, name: newAuthor },
									]);
									setNewAuthor('');
								}
								newAuthor.trim().length > 1
									? checkAuthorNameField()
									: alert('Author name length should be at least 2 characters');
							}}
						/>
					</div>
					<div style={{ marginTop: '20px', marginBottom: '15px' }}>
						<b>Duration</b>
					</div>
					<div>
						<div>
							<Input
								labelText={'Duration'}
								type='text'
								placeholdetText={'Enter duration in minutes...'}
								value={duration}
								onChange={(e) => {
									if (/^[1-9][0-9]*$/.test(e.target.value)) {
										setDuration(+e.target.value);
									}

									if (!e.target.value) setDuration(e.target.value);
								}}
							/>
						</div>
						<div className='createCourse__authors_duration'>
							Duration:<b>{getTimeFromMins(duration)}</b>
						</div>
					</div>
				</div>

				<div className='createCourse__authors_list'>
					<div style={{ marginBottom: '15px' }}>
						<b>Authors</b>
					</div>

					{authors.map((author) => {
						return (
							<div key={author.id} className='createCourse__authors_list_row'>
								<div className='createCourse__authors_list_row_name'>
									{author.name}
								</div>

								<div className='createCourse__authors_list_row_button'>
									<Button
										text='Add author'
										onClick={(e) => {
											e.preventDefault();
											addAuthor(author.id);
											setCourseAuthor([...courseAuthor, author]);
										}}
									/>
								</div>
							</div>
						);
					})}

					<div style={{ marginBottom: '15px' }}>
						<b>Course authors</b>
					</div>
					{!courseAuthor.length ? (
						<div style={{ fontSize: '15px' }}>Author list is empty</div>
					) : (
						<>
							{courseAuthor.map((author) => {
								return (
									<div
										key={author.id}
										className='createCourse__authors_list_row'
									>
										<div className='createCourse__authors_list_row_name'>
											{author.name}
										</div>

										<div className='createCourse__authors_list_row_button'>
											<Button
												text='Delete author'
												onClick={(e) => {
													e.preventDefault();
													deleteAuthor(author.id);
													setAuthors([...authors, author]);
												}}
											/>
										</div>
									</div>
								);
							})}
						</>
					)}
				</div>
			</section>
		</div>
	);
}
export default CreateCourse;
