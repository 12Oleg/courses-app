import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';

import './SearchBar.css';

import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';
import { urlRoutePathCreateCourse } from '../../../../url';
import { useSelector } from 'react-redux';
import { getRole } from '../../../../store/selectors';
import {
	ADD_COURSE_BUTTON_TEXT,
	COURSE_SEARCH_PLACEHOLDER_TEXT,
	SEARCH_COURSE_BUTTON_TEXT,
} from '../../../../constants';

function SearchBar({ inputSearch }) {
	const [input, setInput] = useState('');
	const history = useHistory();
	const userRole = useSelector(getRole);

	const handleOnChangeSearchCourse = (e) => {
		setInput(e.target.value);
		if (!e.target.value) {
			inputSearch(e.target.value);
		}
	};

	const handleOnClickSearchCourse = (e) => {
		e.preventDefault();
		inputSearch(input);
	};

	const handleOnClickAddCourse = (e) => {
		e.preventDefault();
		history.push(urlRoutePathCreateCourse);
	};

	return (
		<div className='searchBar__container'>
			<form>
				<Input
					value={input}
					type='text'
					placeholdetText={COURSE_SEARCH_PLACEHOLDER_TEXT}
					onChange={handleOnChangeSearchCourse}
				/>

				<Button
					className='searchBar__button'
					text={SEARCH_COURSE_BUTTON_TEXT}
					onClick={handleOnClickSearchCourse}
				/>
			</form>

			{userRole === 'admin' && (
				<Button
					text={ADD_COURSE_BUTTON_TEXT}
					onClick={handleOnClickAddCourse}
				/>
			)}
		</div>
	);
}

SearchBar.propTypes = {
	inputSearch: propTypes.func,
};

export default SearchBar;
