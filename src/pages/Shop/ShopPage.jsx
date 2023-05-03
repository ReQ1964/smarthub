import { useState } from "react"

import Categories from "./Categories/Categories"
import Filter from "./Filter/Filter"
import Products from "./Products/Products"
import Pagination from "./Pagination/Pagination"
import { useSelector } from "react-redux"


const ShopPage = () => {
	const data = useSelector((state) => state.products.products);
    const products = Object.values(data)

    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(2)

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)


    return <main>
        <Categories/>
        <Filter/>
        <Products products={currentProducts}/>
        <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} currentPage={currentPage}/>
    </main>
}

export default ShopPage