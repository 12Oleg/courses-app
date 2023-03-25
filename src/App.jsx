import Header from './components/Header/Header.jsx';
import Courses from './components/Courses/Courses.jsx';
import CreateCourse from './components/CreateCourse/CreateCourse.jsx';

import './App.css';

import { useState } from 'react';

function App() {
	const [addCourse, setAddCourse] = useState(false);
	const showAnotherTab = () => setAddCourse(!addCourse);
	return (
		<div>
			<Header />
			{!addCourse ? (
				<Courses showAnotherTab={showAnotherTab} />
			) : (
				<CreateCourse showAnotherTab={showAnotherTab} />
			)}
		</div>
	);
}
export default App;
