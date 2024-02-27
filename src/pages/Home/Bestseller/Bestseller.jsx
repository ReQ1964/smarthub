import classes from './Bestseller.module.scss';
import Button from '../../../components/UI/Button';
import Products from '../../../components/Products/Products';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Bestseller = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);

  return (
    <section className={classes.bestseller}>
      <h3>Featured Products</h3>
      <h2>Bestseller products</h2>
      <Products products={products.slice(0, 4)} />
      <Button
        className={classes.btn}
        onClick={() => {
          navigate('/shop');
        }}
      >
        BROWSE MORE
      </Button>
    </section>
  );
};

export default Bestseller;
