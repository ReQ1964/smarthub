import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import AccountIcon from '../../assets/icon/navbar/account.svg';
import CartIcon from '../../assets/icon/navbar/cart.svg';
import HamburgerIcon from '../../assets/icon/navbar/hamburger.svg';
import CloseIcon from '../../assets/icon/navbar/x.svg';
import classes from './Navbar.module.scss';

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);
	const products = useSelector((state) => state.cart.products);

	const cartQuantity = products.reduce(
		(total, product) => total + product.quantity,
		0
	);

	const navigate = useNavigate();

	const hamburgerHandler = () => {
		setIsActive((prevState) => !prevState);
	};

	return (
		<nav>
			<div className={classes.heading}>
				<h1>
					<Link to={'/'}>SmartHub</Link>
				</h1>
				<div className={classes.controls}>
					<div>
						<img
							src={CartIcon}
							className={classes.cartIcon}
							onClick={() => navigate('/cart')}
							alt=""
						/>
						{cartQuantity != 0 ? <p>{cartQuantity}</p> : ''}
					</div>
					<img src={AccountIcon} onClick={() => navigate('/account')} alt="" />
					{isActive ? (
						<img src={CloseIcon} onClick={hamburgerHandler} alt="" />
					) : (
						<img src={HamburgerIcon} onClick={hamburgerHandler} alt="" />
					)}
				</div>
			</div>
			{isActive && (
				<div className={classes.links}>
					<ul>
						<li>
							<NavLink
								to={'/'}
								className={({ isActive }) => (isActive ? classes.active : '')}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to={'/shop'}
								className={({ isActive }) => (isActive ? classes.active : '')}
							>
								Shop
							</NavLink>
						</li>
						<li>
							<NavLink
								to={'/about'}
								className={({ isActive }) => (isActive ? classes.active : '')}
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to={'/contact'}
								className={({ isActive }) => (isActive ? classes.active : '')}
							>
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
