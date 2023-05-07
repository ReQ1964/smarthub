import classes from './Hero.module.scss';
import Button from '../../../components/UI/Button';
import Carousel from '../../../assets/icon/carousel.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Hero = () => {
	const navigate = useNavigate();

    const [currentSlide, setCurrentSlide] = useState(0)
	const carouselData = [
		{
			header: 'black friday',
			description: 'Check out our sales!',
		},
		{
			header: 'newest devices',
			description: 'Shipped straight from the producer!',
		},
		{
			header: '20% off',
			description: 'Last models up for grabs!',
		},
	];
    const length = carouselData.length

    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    }
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
    }






	return (
		<section className={classes.hero}>
					<div className={classes.carousel}>
						{carouselData.map((item, index) => {
                            return <div key={index} className={index === currentSlide ? `${classes.slide} ${classes.active}` : classes.slide}>
                                {index === currentSlide && (
                                    <>
                                        <h1>{item.header}</h1>
                                        <p>{item.description}</p>
                                    </>
                                )}
             
                            </div>
                        })}
					</div>
				<Button onClick={() => navigate('/shop')}>Shop Now</Button>

				<img src={Carousel} alt="" onClick={prevSlide}/>
				<img src={Carousel} alt="" onClick={nextSlide}/>
		</section>
	);
};

export default Hero;
