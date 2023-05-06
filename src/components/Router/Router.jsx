import { Route, Switch, Redirect } from 'react-router-dom';

import { Courses } from '../../components/Courses';
import { CourseForm } from '../../components/CourseForm';
import { Login } from '../../components/Login';
import { Registration } from '../../components/Registration';
import { CourseInfo } from '../../components/CourseInfo';
import { PrivateRoute } from '../../components/PrivateRouter';
import {
	urlRoutePathCourseInfo,
	urlRoutePathCourses,
	urlRoutePathCreateCourse,
	urlRoutePathLogin,
	urlRoutePathOthers,
	urlRoutePathRegistration,
	urlRoutePathUpdateCourse,
} from '../../url';
import { PERMISSION_ROLE_ADMIN } from '../../constants';

function Router() {
	return (
		<Switch>
			<Route path={urlRoutePathLogin} component={Login} />
			<Route path={urlRoutePathRegistration} component={Registration} />
			<PrivateRoute
				path={urlRoutePathCreateCourse}
				permissionRole={PERMISSION_ROLE_ADMIN}
				component={CourseForm}
			/>
			<PrivateRoute
				path={urlRoutePathUpdateCourse}
				permissionRole={PERMISSION_ROLE_ADMIN}
				component={CourseForm}
			/>
			<PrivateRoute path={urlRoutePathCourseInfo} component={CourseInfo} />
			<PrivateRoute path={urlRoutePathCourses} component={Courses} />
			<Route path={urlRoutePathOthers}>
				<Redirect to={urlRoutePathLogin} />
			</Route>
		</Switch>
	);
}

export default Router;
