import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import Header from '../Header';

const mockedState = {
	user: {
		isAuth: true,
		name: 'Test Name',
	},
	courses: [],
	authors: [],
};
const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

jest.mock('../components/Logo/Logo', () => {
	return function mockedLogo() {
		return <img src='logo.png' alt='logo' />;
	};
});

describe('Header', () => {
	it('should have logo and user name', () => {
		render(
			<Provider store={mockedStore}>
				<Header />
			</Provider>
		);
		const displayedImage = screen.getByRole('img', { name: 'logo' });
		expect(displayedImage.src).toContain('logo.png');
		expect(screen.getByText('Test Name')).toBeInTheDocument();
	});
});
