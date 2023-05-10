import React from 'react';
import classes from './Breadcrumbs.module.scss';
import { NavLink, Link } from 'react-router-dom';
import arrow from '../../assets/icon/carousel.svg';

const Breadcrumbs = () => {
	return (
		<nav className={classes.breadcrumbs}>
			<div className={classes.links}>
				<ul>
					<li>
						<Link to={'/cart'} className={classes.cart_link}>
							Cart
						</Link>
					</li>
					<img src={arrow} alt="" />
					<li>
						<NavLink
							to={'/order/details'}
							className={({ isActive }) => (isActive ? classes.active : '')}
						>
							Details
						</NavLink>
					</li>
					<img src={arrow} alt="" />
					<li>
						<NavLink
							to={'/order/shipping'}
							className={({ isActive }) => (isActive ? classes.active : '')}
						>
							Shipping
						</NavLink>
					</li>
					<img src={arrow} alt="" />
					<li>
						<NavLink
							to={'/order/payment'}
							className={({ isActive }) => (isActive ? classes.active : '')}
						>
							Payment
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Breadcrumbs;
