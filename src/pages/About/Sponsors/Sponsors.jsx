import classes from './Sponsors.module.scss'
import reddit from '../../../assets/icon/sponsors/reddit.svg'
import aws from '../../../assets/icon/sponsors/aws.svg'
import hooli from '../../../assets/icon/sponsors/hooli.svg'
import stripe from '../../../assets/icon/sponsors/stripe.svg'

const Sponsors = () => {
  return <section className={classes.sponsors}>
    <h1>Big Companies Are Here</h1>
    <p>Guarantee of reliable service and long-term support</p>
    <div className={classes.icons}>
        <img src={stripe} alt="" />
        <img src={aws} alt="" />
        <img src={hooli} alt="" />
        <img src={reddit} alt="" />
    </div>
  </section>
}

export default Sponsors