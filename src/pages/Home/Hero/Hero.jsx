import classes from './Hero.module.scss'
import Button from '../../../components/UI/Button'
import Carousel from '../../../assets/icon/carousel.svg'

const Hero = () => {
    return <section>
        <div>
            <h1>black friday</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat ullam molestiae maxime sapiente cum hic sunt qui dolorem saepe.</p>
            <Button>Shop Now</Button>
            <img src={Carousel} alt="" />
            <img src={Carousel} alt="" />
        </div>
    </section>
}

export default Hero