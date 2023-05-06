import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';

import { getIsAuth, getRole } from '../../store/selectors.js';
import { LOADING_INFORMATION_TEXT } from '../../constants';
import { urlRoutePathCourses } from '../../url.js';

function PrivateRoute({ component: Component, permissionRole, ...rest }) {
	const isAuth = useSelector(getIsAuth);
	const userRole = useSelector(getRole);
	return (
		<Route
			{...rest}
			render={(props) =>
				!isAuth ? (
					<h3>{LOADING_INFORMATION_TEXT}</h3>
				) : !permissionRole ? (
					<Component {...props} />
				) : userRole === permissionRole ? (
					<Component {...props} />
				) : (
					<Redirect to={urlRoutePathCourses} />
				)
			}
		/>
	);
}

PrivateRoute.propTypes = {
	component: propTypes.func,
	permissionRole: propTypes.string,
};

export default PrivateRoute;
