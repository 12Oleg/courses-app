import { mockedAuthorsList } from '../constants';

function listOfAuthors(arrayOfId) {
	return arrayOfId.authors
		.map(
			(authorID) =>
				mockedAuthorsList.find((author) => author.id === authorID)?.name ||
				'n/a'
		)
		.join(', ');
}

export default listOfAuthors;
