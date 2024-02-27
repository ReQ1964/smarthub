import classes from './Categories.module.scss';
import smartwatch from '../../../assets/img/home-categories/smartwatch.png';
import phone from '../../../assets/img/home-categories/phone.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFilteredProducts } from '../../../store/products-slice';

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section className={classes.categories}>
      <div className={`${classes.category}`}>
        <p className={classes.alert}>Ends Today</p>
        <h2>Elements Of Style</h2>
        <p>Top Ten Products of the Week</p>
        <a
          onClick={() => {
            navigate('/shop');
            dispatch(
              setFilteredProducts({ sortType: 'a-z', productType: 'watch' }),
            );
          }}
        >
          Explore Items
        </a>
        <img src={smartwatch} alt="" />
      </div>
      <div className={`${classes.category}`}>
        <p>Your Space</p>
        <h2>Modern Life</h2>
        <p>Top Ten Products of the Week</p>
        <a
          onClick={() => {
            navigate('/shop');
            dispatch(
              setFilteredProducts({ sortType: 'a-z', productType: 'phone' }),
            );
          }}
        >
          Explore Items
        </a>
        <img src={[phone]} alt="" />
      </div>
    </section>
  );
};

export default Categories;
