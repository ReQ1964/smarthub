import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import OrderItems from '../../components/OrderItems/OrderItems';
import classes from './Order.module.scss';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useScrollToTop from '../../hooks/useScrollToTop';

const Order = () => {
	useScrollToTop();
	return (
		<>
			<h1 className={classes.heading}>
				<Link to={'/'}>SmartHub</Link>
			</h1>
			<OrderItems />
			<Breadcrumbs />
			<Outlet />
		</>
	);
};

export default Order;
