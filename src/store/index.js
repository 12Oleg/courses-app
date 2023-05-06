import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

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
	composeWithDevTools(applyMiddleware(thunk))
);
