import { mockedCoursesList } from '../../constants';
import { coursesManage } from '../courses/reducer';

describe('coursesReducer', () => {
	const coursesArray = mockedCoursesList;

	it('should return the initial state', () => {
		expect(coursesManage(undefined, { type: undefined })).toEqual([]);
	});

	it('should handle GET_COURSES and returns new state', () => {
		const previousState = [];
		const gottenCourses = {
			result: coursesArray,
		};
		expect(
			coursesManage(previousState, {
				type: 'GET_COURSES',
				payload: gottenCourses,
			})
		).toEqual(coursesArray);
	});

	it('should handle ADD_COURSE and returns new state', () => {
		const previousState = coursesArray;
		const addedCourse = {
			id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
			title: 'Python',
			description: `Lorem Ipsum `,
			creationDate: '8/3/2022',
			duration: 260,
			authors: ['27cc3006-e93a-4748-8ca8-73d06aa93b6d'],
		};
		expect(
			coursesManage(previousState, {
				type: 'ADD_COURSE',
				payload: addedCourse,
			})
		).toEqual([...previousState, addedCourse]);
	});
});
