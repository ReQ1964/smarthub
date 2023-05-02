import classes from './Methods.module.scss'
import SocialIcons from '../../../components/UI/SocialIcons'

const Methods = () => {
  return <section className={classes.methods}>
    <h3>Contact us</h3>
    <h1>Get in touch today!</h1>
    <p>Need some support or want to ask some questions?</p>
    <h4>Phone: +451 251 322</h4>
    <SocialIcons className={classes.socialIcons}/>
  </section>
}

export default Methods