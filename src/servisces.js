import { store } from './store/index';

export async function fetchPostData(url, data) {
	const response = await fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const result = await response.json();

	if (!response.ok) {
		if (result.errors) {
			throw new Error(result.errors);
		} else {
			throw new Error(result.result);
		}
	}
	return result;
}

async function fetchGetData(url) {
	const response = await fetch(url);
	const result = await response.json();

	if (!response.ok) {
		if (result.errors) {
			throw new Error(result.errors);
		} else {
			throw new Error(result.result);
		}
	}
	return result;
}

export const getAuthorsAndCoursesFromServer = async (
	urlApiAuthors,
	getAuthors,
	urlApiCourses,
	getCourses
) => {
	try {
		const resultFetchAuthors = await fetchGetData(urlApiAuthors);
		store.dispatch(getAuthors(resultFetchAuthors));
		const resultFetchCourses = await fetchGetData(urlApiCourses);
		store.dispatch(getCourses(resultFetchCourses));
	} catch (error) {
		alert(error);
	}
};
