import classes from './Team.module.scss';
import member1 from '../../../assets/img/about-team/member1.png';
import member2 from '../../../assets/img/about-team/member2.png';
import member3 from '../../../assets/img/about-team/member3.png';
import SocialIcons from '../../../components/UI/SocialIcons';

const Team = () => {
	return (
		<section className={classes.team}>
			<h1>Meet Our Team</h1>
			<div className={classes.member}>
				<img src={member1} alt="" />
				<h3>Anna Winston</h3>
				<p>Marketing</p>
				<SocialIcons className={classes.icons}/>
			</div>
			<div className={classes.member}>
				<img src={member2} alt="" />
				<h3>Juliet Wolfer</h3>
				<p>Back-end dev</p>
				<SocialIcons className={classes.icons}/>
			</div>
			<div className={classes.member}>
				<img src={member3} alt="" />
				<h3>Mark Gutenberg</h3>
				<p>Front-end dev</p>
				<SocialIcons className={classes.icons}/>
			</div>
		</section>
	);
};

export default Team;
