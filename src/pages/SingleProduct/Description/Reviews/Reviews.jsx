import classes from './Reviews.module.scss';
import filledStar from '../../../../assets/icon/rating/star-filled.svg';
import star from '../../../../assets/icon/rating/star.svg';

const Reviews = () => {
	return (
		<section className={classes.reviews}>
			<div className={classes.review}>
				<div className={classes.rating}>
					<div>
						<p>John</p>
						<div className={classes.stars}>
							<img src={filledStar} alt="" />
							<img src={filledStar} alt="" />
							<img src={filledStar} alt="" />
							<img src={filledStar} alt="" />
							<img src={star} alt="" />
						</div>
					</div>
					<p className={classes.date}>14/07/2022</p>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam harum
					et accusantium iusto, totam suscipit assumenda consequuntur, molestiae
					maxime laborum ratione nemo? Ex facilis qui porro error quas corporis
					in.
				</p>
			</div>
			<div className={classes.review}>
				<div className={classes.rating}>
					<div>
						<p>John</p>
						<div className={classes.stars}>
							<img src={filledStar} alt="" />
							<img src={filledStar} alt="" />
							<img src={filledStar} alt="" />
							<img src={filledStar} alt="" />
							<img src={star} alt="" />
						</div>
					</div>
					<p className={classes.date}>14/07/2022</p>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam harum
					et accusantium iusto, totam suscipit assumenda consequuntur, molestiae
					maxime laborum ratione nemo? Ex facilis qui porro error quas corporis
					in.
				</p>
			</div>
		</section>
	);
};

export default Reviews;
