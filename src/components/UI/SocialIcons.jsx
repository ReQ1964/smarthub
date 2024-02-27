import classes from './SocialIcons.module.scss';
import facebook from '../../assets/icon/socials/facebook.svg';
import instagram from '../../assets/icon/socials/instagram.svg';
import twitter from '../../assets/icon/socials/twitter.svg';

const SocialIcons = (props) => {
  return (
    <div className={`${classes.icons} ${props.className}`}>
      <a href="#">
        <img src={facebook} alt="facebook icon" />
      </a>
      <a href="#">
        <img src={instagram} alt="instagram icon" id={classes.instagram} />
      </a>
      <a href="#">
        <img src={twitter} alt="twitter icon" />
      </a>
    </div>
  );
};

export default SocialIcons;
