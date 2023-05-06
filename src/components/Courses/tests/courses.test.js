import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Switch } from 'react-router-dom';

import Courses from '../Courses';
import CourseForm from '../../CourseForm/CourseForm';
import { mockedAuthorsList, mockedCoursesList } from '../../../constants';

const createMockedStore = (mockedState) => ({
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
});

describe('Courses', () => {
	const mockedState = {
		user: {
			role: 'admin',
			isAuth: true,
		},
		courses: mockedCoursesList,
		authors: mockedAuthorsList,
	};
	const mockedStore = createMockedStore(mockedState);

	it('should display amount of CourseCard equal length of courses array', () => {
		render(
			<Provider store={mockedStore}>
				<Courses />
			</Provider>
		);
		expect(
			screen.queryAllByText('Authors:', {
				selector: '.authors_line > b',
			}).length
		).toBe(mockedState.courses.length);
	});

	it('should display Empty container if courses array length is 0', () => {
		const emptyState = {
			...mockedState,
			courses: [],
		};
		render(
			<Provider store={createMockedStore(emptyState)}>
				<Courses />
			</Provider>
		);
		expect(
			screen.queryAllByText('Authors:', {
				selector: '.authors_line > b',
			}).length
		).toEqual(0);
		expect(
			screen.queryByText('Result: no match', {
				selector: '.courses__search-warning',
			})
		).toBeInTheDocument();
	});

	it('CourseForm should be showed after a click on a button "Add new course', async () => {
		render(
			<MemoryRouter initialEntries={['/courses']}>
				<Provider store={mockedStore}>
					<Switch>
						<Route exact path='/courses' component={Courses} />
						<Route exact path='/courses/add' component={CourseForm} />
					</Switch>
				</Provider>
			</MemoryRouter>
		);
		fireEvent.click(screen.getByText('Add new course'));
		await waitFor(() =>
			expect(
				screen.getByText('Create course', {
					selector: '.button',
				})
			).toBeInTheDocument()
		);
	});
});
