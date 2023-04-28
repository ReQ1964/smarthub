import CartItem from "./CartItem/CartItem"
import { DUMMY_PRODUCTS } from "../../Shop/ShopPage"
import classes from './CartItems.module.scss'

const CartItems = () => {
  return <section className={classes.items}>
    {DUMMY_PRODUCTS.map(product => <CartItem key={product.id} name={product.name} img={product.img} price={product.price}/>) }
  </section>
}

export default CartItems