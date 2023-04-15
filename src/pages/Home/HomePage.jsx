import Categories from "./Categories/Categories"
import Hero from "./Hero/Hero"
import Bestseller from "./Bestseller/Bestseller"
import Review from "./Review/Review"
import Features from "./Features/Features"

const HomePage = () => {
    return <main>
        <Hero/>
        <Categories/>
        <Bestseller/>
        <Review/>
        <Features/>
    </main>
}

export default HomePage