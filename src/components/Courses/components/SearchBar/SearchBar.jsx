import { useState } from 'react';

import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

import './SearchBar.css';

function SearchBar({ inputSearch, showAnotherTab }) {
	const [input, setInput] = useState('');

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
					showAnotherTab();
				}}
			/>
		</div>
	);
}

export default SearchBar;
