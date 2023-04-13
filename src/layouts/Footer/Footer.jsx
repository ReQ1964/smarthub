import classes from './Footer.module.scss'
import facebook from '../../assets/icon/facebook.svg'
import instagram from '../../assets/icon/instagram.svg'
import twitter from '../../assets/icon/twitter.svg'

const Footer = () => {
    return <footer>
        <div className={classes.socials}>
            <h3>get in touch</h3>
            <div className={classes.icons}>
                <a href="#"><img src={facebook} alt="facebook icon" /></a>
                <a href="#"><img src={instagram} alt="instagram icon" id={classes.instagram} /></a>
                <a href="#"><img src={twitter} alt="twitter icon" /></a>
            </div>
        </div>
        <div className={classes.info}>
            <h3>company info</h3>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Carrier</a></li>
                <li><a href="#">We are hiring</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </div>
        <div className={classes.features}>
            <h3>features</h3>
            <ul>
                <li><a href="#">Business Marketing</a></li>
                <li><a href="#">User Analytic</a></li>
                <li><a href="#">Live Chat</a></li>
                <li><a href="#">Unlimited Support</a></li>
            </ul>
        </div>
    </footer>
}

export default Footer