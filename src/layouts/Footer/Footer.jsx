import classes from './Footer.module.scss'
import SocialIcons from '../../components/UI/SocialIcons'

const Footer = () => {
    return <footer>
        <div className={classes.socials}>
            <h2>get in touch</h2>
            <SocialIcons/>

        </div>
        <div className={classes.info}>
            <h2>company info</h2>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Carrier</a></li>
                <li><a href="#">We are hiring</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </div>
        <div className={classes.features}>
            <h2>features</h2>
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