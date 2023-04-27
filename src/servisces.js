import { NOT_AUTHORIZED_ALERT_TEXT } from './constants';
import { urlApiGetCurrentUser, urlApiRegistration } from './url';

export async function handleRegistration(newUser) {
	const response = await fetch(urlApiRegistration, {
		method: 'POST',
		body: JSON.stringify(newUser),
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

export async function checkCurrentUserData() {
	try {
		const token = localStorage.getItem('userToken');
		if (!token) {
			return undefined;
		}
		const response = await fetch(urlApiGetCurrentUser, {
			headers: {
				Authorization: token,
			},
		});
		const wholeUserData = await response.json();

		if (!response.ok) {
			throw new Error(NOT_AUTHORIZED_ALERT_TEXT);
		}
		const { email, name, role } = wholeUserData.result;
		return { token, email, name, role };
	} catch (error) {
		localStorage.removeItem('userToken');
		alert(error);
		return undefined;
	}
}
