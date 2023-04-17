import Categories from "./Categories/Categories"
import Filter from "./Filter/Filter"
import Products from "./Products/Products"
import phone from '../../assets/img/example-phone.png'

const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        name: 'Phone',
        company: 'Phone Company',
        price: 150,
        img: phone,
        colors: ['orange', 'green', 'black'],
    },
    {
        id: 'p2',
        name: 'Phone2',
        company: 'Phone Company',
        price: 150,
        img: phone,
        colors: ['orange', 'green', 'black'],
    },
    {
        id: 'p3',
        name: 'Phone3',
        company: 'Phone Company',
        price: 150,
        img: phone,
        colors: ['orange', 'green', 'black'],
    },
    {
        id: 'p4',
        name: 'Phone4',
        company: 'Phone Company',
        price: 150,
        img: phone,
        colors: ['orange', 'green', 'black'],
    }
]

const ShopPage = () => {
    return <main>
        <Categories/>
        <Filter/>
        <Products products={DUMMY_PRODUCTS}/>
    </main>
}

export default ShopPage