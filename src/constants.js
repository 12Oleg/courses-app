export const SHOW_COURSE_BUTTON_TEXT = 'Show course';
export const SEARCH_COURSE_BUTTON_TEXT = 'Search';
export const ADD_COURSE_BUTTON_TEXT = 'Add new course';
export const ADD_AUTHOR_BUTTON_TEXT = 'Add author';
export const DELETE_AUTHOR_BUTTON_TEXT = 'Delete author';
export const UPDATE_COURSE_BUTTON_TEXT = 'Update course';
export const CREATE_COURSE_BUTTON_TEXT = 'Create course';
export const CREATE_AUTHOR_BUTTON_TEXT = 'Create author';
export const LOGOUT_BUTTON_TEXT = 'Logout';
export const LOGIN_BUTTON_TEXT = 'Login';
export const REGISTRATION_BUTTON_TEXT = 'Registration';

export const COURSE_SEARCH_PLACEHOLDER_TEXT = 'Enter course name...';
export const AUTHOR_NAME_PLACEHOLDER_TEXT = 'Enter author name...';
export const DURATION_PLACEHOLDER_TEXT = 'Enter duration in minutes...';
export const DESCRIPTION_PLACEHOLDER_TEXT = 'Enter description';
export const TITLE_PLACEHOLDER_TEXT = 'Enter title...';
export const EMAIL_PLACEHOLDER_TEXT = 'Enter email';
export const PASSWORD_PLACEHOLDER_TEXT = 'Enter password';
export const NAME_PLACEHOLDER_TEXT = 'Enter name';

export const AUTHOR_NAME_LABEL_TEXT = 'Author name';
export const DURATION_LABEL_TEXT = 'Author name';
export const TITLE_LABEL_TEXT = 'Title';
export const EMAIL_LABEL_TEXT = 'Email';
export const PASSWORD_LABEL_TEXT = 'Password';
export const NAME_LABEL_TEXT = 'Name';

export const PERMISSION_ROLE_ADMIN = 'admin';

export const USERNAME_AUTOCOMPLETE_TEXT = 'username';
export const PASSWORD_AUTOCOMPLETE_TEXT = 'current-password';

export const FILL_FIELDS_ALERT_TEXT = 'Please, fill in all fields';
export const TEXT_LENGTH_ALERT_TEXT =
	'Text length should be at least 2 characters';
export const AUTHOR_NAME_LENGTH_ALERT_TEXT =
	'Author name length should be at least 2 characters';
export const NOT_AUTHORIZED_ALERT_TEXT = 'Not authorized';

export const NO_COURSE_FOUND_INFORMATION_TEXT = 'Course not found';
export const NO_RESULT_MATCH_INFORMATION_TEXT = 'Result: no match';
export const LOADING_INFORMATION_TEXT = 'Loading...';
export const AUTHOR_LIST_EMPTY_INFORMATION_TEXT = 'Author list is empty';

export const mockedCoursesList = [
	{
		id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
		title: 'JavaScript',
		description: `Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum
    has been the industry's standard dummy text ever since the
    1500s, when an unknown
    printer took a galley of type and scrambled it to make a type
    specimen book. It has survived
    not only five centuries, but also the leap into electronic
    typesetting, remaining essentially unchanged.`,
		creationDate: '8/3/2021',
		duration: 160,
		authors: [
			'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			'f762978b-61eb-4096-812b-ebde22838167',
		],
	},
	{
		id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
		title: 'Angular',
		description: `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum
has been the industry's standard dummy text ever since the
1500s, when an unknown
printer took a galley of type and scrambled it to make a type
specimen book.`,
		creationDate: '10/11/2020',
		duration: 210,
		authors: [
			'df32994e-b23d-497c-9e4d-84e4dc02882f',
			'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		],
	},
];

export const mockedAuthorsList = [
	{
		id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
		name: 'Vasiliy Dobkin',
	},
	{
		id: 'f762978b-61eb-4096-812b-ebde22838167',
		name: 'Nicolas Kim',
	},
	{
		id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
		name: 'Anna Sidorenko',
	},
	{
		id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		name: 'Valentina Larina',
	},
];
