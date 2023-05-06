import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import CourseCard from '../CourseCard';

describe('CourseCard', () => {
	const mockedState = {
		user: {
			role: 'admin',
		},
		courses: [],
		authors: [],
	};
	const mockedStore = {
		getState: () => mockedState,
		subscribe: jest.fn(),
		dispatch: jest.fn(),
	};

	const props = {
		title: 'Course title',
		description: 'Course description',
		duration: 130,
		convertedListOfAuthors: 'John Doe, Tim Cob',
		creationDate: '1/12/2022',
	};

	const provider = (
		<Provider store={mockedStore}>
			<CourseCard {...props} />
		</Provider>
	);

	beforeEach(() => {
		render(provider);
	});

	it('should display title', () => {
		expect(
			screen.getByText('Course title', { selector: 'h1.h1' })
		).toBeInTheDocument();
	});

	it('should display description', () => {
		expect(
			screen.getByText('Course description', {
				selector: 'div.courseCard__first-part div',
			})
		).toBeInTheDocument();
	});

	it('should display duration in the correct format', () => {
		expect(
			screen.getByText('02:10 hours', {
				selector: 'div.courseCard__second-part div',
			})
		).toBeInTheDocument();
	});

	it('should display authors list', () => {
		expect(
			screen.getByText('John Doe, Tim Cob', {
				selector: 'div.courseCard__second-part div',
			})
		).toBeInTheDocument();
	});

	it('should display created date in the correct format', () => {
		const dateRegex = /^(?:[1-9]|[12]\d|3[01])\/(?:[1-9]|1[0-2])\/\d{4}$/;
		const createdDate = screen.getByText(dateRegex, {
			selector: 'div.courseCard__second-part div',
		}).textContent;
		expect(createdDate).toEqual(expect.stringMatching('1/12/2022'));
	});
});
