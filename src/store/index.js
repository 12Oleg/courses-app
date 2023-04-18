import { combineReducers, createStore } from 'redux';
import { userAuthorization } from './user/reducer';
import { coursesManage } from './courses/reducer';
import { authorsManage } from './authors/reducer';

const rootReducer = combineReducers({
	user: userAuthorization,
	courses: coursesManage,
	authors: authorsManage,
});

export const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
