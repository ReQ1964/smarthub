import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

import classes from './Navbar.module.scss'
import SearchIcon from '../../assets/icon/search.svg'
import AccountIcon from '../../assets/icon/account.svg'
import HamburgerIcon from '../../assets/icon/hamburger.svg'
import CartIcon from '../../assets/icon/cart.svg'
import CloseIcon from '../../assets/icon/x.svg'

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)

    const hamburgerHandler = () => {
        setIsActive((prevState) => !prevState)
    }

    return <nav>
        <div className={classes.heading}>
            <h1><Link to={'/'}>SmartHub</Link></h1>
            <div className={classes.controls}>
                <img src={SearchIcon} alt="" />
                <img src={CartIcon} alt="" />
                <img src={AccountIcon} alt="" />
                {isActive ? <img src={CloseIcon} onClick={hamburgerHandler} alt="" /> : <img src={HamburgerIcon} onClick={hamburgerHandler} alt="" />}
            </div>
        </div>
        {isActive && <div className={classes.links}>
            <ul>
                <li><NavLink to={'/'} className={({isActive}) => isActive ? classes.active : ''}>Home</NavLink></li>
                <li><NavLink to={'/shop'} className={({isActive}) => isActive ? classes.active : ''}>Shop</NavLink></li>
                <li><NavLink to={'/about'} className={({isActive}) => isActive ? classes.active : ''}>About</NavLink></li>
                <li><NavLink to={'/contact'} className={({isActive}) => isActive ? classes.active : ''}>Contact</NavLink></li>
            </ul>
        </div>}
    </nav>
}

export default Navbar