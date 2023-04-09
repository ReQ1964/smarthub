import classes from './Navbar.module.scss'
import SearchIcon from '../../assets/icon/search.svg'
import AccountIcon from '../../assets/icon/account.svg'
import HamburgerIcon from '../../assets/icon/hamburger.svg'
import CartIcon from '../../assets/icon/cart.svg'

const Navbar = () => {
    return <nav>
        <div className={classes.heading}>
            <h1>SmartHub</h1>
            <div className={classes.controls}>
                <img src={SearchIcon} alt="" />
                <img src={CartIcon} alt="" />
                <img src={AccountIcon} alt="" />
                <img src={HamburgerIcon} alt="" />
            </div>
        </div>
        <div className={classes.links}>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
}

export default Navbar