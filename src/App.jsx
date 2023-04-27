import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import './App.css';

import { Header } from './components/Header';
import { checkUserAfterReloadOfPage, handleLogout } from './store/user/thunk';
import { Router } from './components/Router';

function App() {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleHeaderOnLogout = (e) => {
		e.preventDefault();
		dispatch(handleLogout(history));
	};

	useEffect(() => {
		dispatch(checkUserAfterReloadOfPage(history));
	}, [dispatch, history]);

	return (
		<div>
			<Header onLogout={handleHeaderOnLogout} />
			<Router />
		</div>
	);
}
export default App;
