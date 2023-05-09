import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import classes from './Order.module.scss';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Order = () => {
	return (
		<>
			<h1 className={classes.heading}>
				<Link to={'/'}>SmartHub</Link>
			</h1>
			<Breadcrumbs />
			<Outlet />
		</>
	);
};

export default Order;
