import { Link } from 'react-scroll';
import classes from './Categories.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setFilteredProducts } from '../../../store/products-slice';

const Categories = () => {
	const dispatch = useDispatch();
	const productType = useSelector((state) => state.products.currentProductType);
	const sortType = useSelector((state) => state.products.sortType);

	return (
		<section className={classes.categories}>
			<Link
				to="filter"
				spy={true}
				smooth={true}
				duration={250}
				className={
					productType === 'all'
						? `${classes.category} ${classes.active}`
						: classes.category
				}
				onClick={() =>
					dispatch(
						setFilteredProducts({ sortType: sortType, productType: 'all' })
					)
				}
			>
				<h2>All Devices</h2>
			</Link>
			<Link
				to="filter"
				spy={true}
				smooth={true}
				duration={250}
				className={
					productType === 'phone'
						? `${classes.category} ${classes.active}`
						: classes.category
				}
				onClick={() =>
					dispatch(
						setFilteredProducts({ sortType: sortType, productType: 'phone' })
					)
				}
			>
				<h2>Phones</h2>
			</Link>
			<Link
				to="filter"
				spy={true}
				smooth={true}
				duration={250}
				className={
					productType === 'watch'
						? `${classes.category} ${classes.active}`
						: classes.category
				}
				onClick={() =>
					dispatch(
						setFilteredProducts({ sortType: sortType, productType: 'watch' })
					)
				}
			>
				<h2>Watches</h2>
			</Link>
		</section>
	);
};

export default Categories;
