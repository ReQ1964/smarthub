import { useState } from "react"

import Categories from "./Categories/Categories"
import Filter from "./Filter/Filter"
import Products from "./Products/Products"
import Pagination from "./Pagination/Pagination"
import phone from '../../assets/img/example-phone.png'

export const DUMMY_PRODUCTS = [
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
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(2)

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = DUMMY_PRODUCTS.slice(indexOfFirstProduct, indexOfLastProduct)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)


    return <main>
        <Categories/>
        <Filter/>
        <Products products={currentProducts}/>
        <Pagination productsPerPage={productsPerPage} totalProducts={DUMMY_PRODUCTS.length} paginate={paginate} currentPage={currentPage}/>
    </main>
}

export default ShopPage