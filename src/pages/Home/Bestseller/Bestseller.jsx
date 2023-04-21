import classes from './Bestseller.module.scss'
import phone from '../../../assets/img/example-phone.png'
import Product from '../../../components/UI/Product'
import Button from '../../../components/UI/Button'
import { useNavigate } from 'react-router-dom'

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

const Bestseller = () => {
    const navigate = useNavigate()

    return <section className={classes.bestseller}>
        <h3>Featured Products</h3>
        <h1>Bestseller products</h1>
        <ul className={classes.products}>
        {DUMMY_PRODUCTS.map(product => <Product onClick={() => navigate(`/shop/${product.id}`)} key={product.id} id={product.id} img={product.img} name={product.name} price={product.price} company={product.company} colors={product.colors}/>)}
        </ul>
        <Button className={classes.btn}>BROWSE MORE</Button>

    </section>
}

export default Bestseller