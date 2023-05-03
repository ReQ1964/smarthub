import { Outlet } from 'react-router';
import Navbar from './layouts/Navbar/Navbar';
import Footer from './layouts/Footer/Footer';
import useScrollToTop from './hooks/useScrollToTop';
import useResetCategory from './hooks/useResetCategory';
import { setFilteredProducts, setProducts} from './store/products-slice';
import { useDispatch } from 'react-redux';
import './App.scss';
import { useEffect } from 'react';

function App() {
	const dispatch = useDispatch();
	useScrollToTop()
	useResetCategory()

	const fetchProducts = async (url) => {
		try {
		  const response = await fetch(url);
		  const data = await response.json();
		  dispatch(setProducts(Object.values(data)));
		  dispatch(setFilteredProducts('all'))
		} catch (error) {
		  console.log(`Something went wrong: ${error}`);
		}
	  };

	useEffect(() => {
		fetchProducts('https://phone-shop-43033-default-rtdb.europe-west1.firebasedatabase.app/products.json')
	}, [])


	return (
		<div className="App">
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
