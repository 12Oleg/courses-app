import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router-dom';

import CourseForm from '../../CourseForm/CourseForm';
import { mockedAuthorsList, mockedCoursesList } from '../../../constants';

const createMockedStore = (mockedState) => ({
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
});

describe('CourseForm', () => {
	const mockedState = {
		user: {
			role: 'admin',
			isAuth: true,
		},
		courses: mockedCoursesList,
		authors: mockedAuthorsList,
	};
	const mockedStore = createMockedStore(mockedState);

	const routerAndProvider = (
		<MemoryRouter
			initialEntries={[`/courses/update/${mockedState.courses[1].id}`]}
		>
			<Provider store={mockedStore}>
				<Route exact path='/courses/update/:courseId' component={CourseForm} />
			</Provider>
		</MemoryRouter>
	);

	beforeEach(() => {
		render(routerAndProvider);
	});

	const listOfAuthors = (course) => {
		return course.authors.map(
			(authorID) =>
				mockedState.authors.find((author) => author.id === authorID)?.name ||
				'n/a'
		);
	};

	it('should show authors lists (all and course authors)', () => {
		const courseAuthorList = screen.getAllByText(/./, {
			selector: 'div.courseAuthor',
		});
		const courseAuthorTexts = courseAuthorList.map((el) =>
			el.textContent.trim()
		);
		const courseAuthorsToCheck = listOfAuthors(mockedState.courses[1]);
		expect(courseAuthorTexts).toEqual(
			expect.arrayContaining(courseAuthorsToCheck)
		);
		expect(courseAuthorsToCheck).toEqual(
			expect.arrayContaining(courseAuthorTexts)
		);

		const courseRemainedAuthorList = screen.getAllByText(/./, {
			selector: 'div.remainedAuthor',
		});
		const courseRemainedAuthorTexts = courseRemainedAuthorList.map((el) =>
			el.textContent.trim()
		);
		const remainedAuthorsToCheck = mockedState.authors
			.filter((author) => !mockedState.courses[1].authors.includes(author.id))
			.map((author) => author.name);
		expect(courseRemainedAuthorTexts).toEqual(
			expect.arrayContaining(remainedAuthorsToCheck)
		);
		expect(remainedAuthorsToCheck).toEqual(
			expect.arrayContaining(courseRemainedAuthorTexts)
		);
	});

	it('"Create author" click button should call dispatch', () => {
		fireEvent.change(screen.getByPlaceholderText('Enter author name...'), {
			target: { value: 'John Doe' },
		});
		fireEvent.click(screen.getByRole('button', { name: 'Create author' }));
		expect(mockedStore.dispatch).toHaveBeenCalled();
	});

	it('"Add author" button click should add an author to course authors list', () => {
		const targetAuthorName = 'Nicolas Kim';
		const authorBlock = screen
			.getByText(targetAuthorName, {
				selector: 'div.remainedAuthor',
			})
			.closest('.createCourse__authorBlock');
		const addButton = authorBlock.querySelector('button');
		expect(addButton).toHaveTextContent('Add author');

		fireEvent.click(addButton);

		expect(
			screen.queryByText(targetAuthorName, {
				selector: 'div.remainedAuthor',
			})
		).not.toBeInTheDocument();

		expect(
			screen.getByText(targetAuthorName, {
				selector: 'div.courseAuthor',
			})
		).toBeInTheDocument();
	});

	it('"Delete author" button click should delete an author from the course list', () => {
		const targetAuthorName = 'Anna Sidorenko';
		const authorBlock = screen
			.getByText(targetAuthorName, {
				selector: 'div.courseAuthor',
			})
			.closest('.createCourse__authorBlock');
		const addButton = authorBlock.querySelector('button');
		expect(addButton).toHaveTextContent('Delete author');

		fireEvent.click(addButton);

		expect(
			screen.queryByText(targetAuthorName, {
				selector: 'div.courseAuthor',
			})
		).not.toBeInTheDocument();

		expect(
			screen.getByText(targetAuthorName, {
				selector: 'div.remainedAuthor',
			})
		).toBeInTheDocument();
	});
});
