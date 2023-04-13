import Categories from "./Category/Categories"
import Hero from "./Hero/Hero"
import Bestseller from "./Bestseller/Bestseller"
import Review from "./Review/Review"

const HomePage = () => {
    return <main>
        <Hero/>
        <Categories/>
        <Bestseller/>
        <Review/>
    </main>
}

export default HomePage