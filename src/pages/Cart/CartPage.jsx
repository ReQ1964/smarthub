import classes from './CartPage.module.scss'
import Button from '../../components/UI/Button'
import CartItems from './CartItems/CartItems'

const CartPage = () => {
  return <main className={classes.cart}>
    <h1>Your Cart Items</h1>
    <div className={classes.info}>
      <p>Product</p>
      <p>Price</p>
    </div>
    <CartItems/>
    <h3>Total price: $50</h3>
    <Button className={classes.checkout}>Checkout</Button>
  </main>
}

export default CartPage