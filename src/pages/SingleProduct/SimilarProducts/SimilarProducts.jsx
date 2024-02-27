import classes from './SimilarProducts.module.scss';
import { useSelector } from 'react-redux';
import ProductsList from '../../../components/Products/ProductsList';

const SimilarProducts = ({ productType, productId }) => {
  const products = useSelector((state) =>
    state.products.products
      .filter(
        (product) => product.type === productType && product.id != productId,
      )
      .slice(0, 2),
  );

  return (
    <section className={classes.similar}>
      <h1>SIMILAR PRODUCTS</h1>
      <ProductsList products={products} />
    </section>
  );
};

export default SimilarProducts;
