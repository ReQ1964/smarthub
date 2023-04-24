import classes from './Review.module.scss'
import user from '../../../assets/img/home-review/review-user.png'
import star from '../../../assets/icon/rating/star.svg'
import filledStar from '../../../assets/icon/rating/star-filled.svg'


const Review = () => {
    return <section className={classes.review}>
        <h1>customers reviews</h1>
        <div className={classes.rating}>
        <div><img src={user} alt="reviewer's profile picture" /></div>
            <img src={filledStar} alt="" />
            <img src={filledStar} alt="" />
            <img src={filledStar} alt="" />
            <img src={filledStar} alt="" />
            <img src={star} alt="" />
        </div>
        <p>SmartHub helps you with picking out the best devices around!</p>
        <div className={classes.info}>
            <p>Emma Stanford</p>
        </div>
    </section>
}

export default Review