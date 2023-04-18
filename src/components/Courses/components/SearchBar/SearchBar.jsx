import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';

import './SearchBar.css';

import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import { urlRoutePathCreateCourse } from '../../../../url';

function SearchBar({ inputSearch }) {
	const [input, setInput] = useState('');
	const history = useHistory();
	return (
		<div className='searchBar__container'>
			<form>
				<Input
					value={input}
					type='text'
					placeholdetText={'Enter course name...'}
					onChange={(e) => {
						setInput(e.target.value);
						if (!e.target.value) {
							inputSearch(e.target.value);
						}
					}}
				/>

				<Button
					className='searchBar__button'
					text='Search'
					onClick={(e) => {
						e.preventDefault();
						inputSearch(input);
					}}
				/>
			</form>
			<Button
				text='Add new course'
				onClick={(e) => {
					e.preventDefault();
					history.push(urlRoutePathCreateCourse);
				}}
			/>
		</div>
	);
}

SearchBar.propTypes = {
	inputSearch: propTypes.func,
};

export default SearchBar;
