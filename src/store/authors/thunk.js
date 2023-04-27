import { urlApiAddAuthor, urlApiAuthors } from '../../url';
import { addAuthor, getAuthors } from './actionCreators';

export const getAuthorsFromServer = () => async (dispatch) => {
	try {
		const response = await fetch(urlApiAuthors);
		const result = await response.json();
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		dispatch(getAuthors(result));
	} catch (error) {
		alert(error);
	}
};

export const addAuthorToServer =
	(createdAuthor, authors, setAuthors, setNewAuthor) =>
	async (dispatch, getState) => {
		try {
			const token = getState().user.token;
			const response = await fetch(urlApiAddAuthor, {
				method: 'POST',
				body: JSON.stringify(createdAuthor),
				headers: { 'Content-Type': 'application/json', Authorization: token },
			});
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const wholeAuthorData = await response.json();
			dispatch(addAuthor(wholeAuthorData.result));
			setAuthors([...authors, wholeAuthorData.result]);
			setNewAuthor('');
		} catch (error) {
			alert(error);
		}
	};
