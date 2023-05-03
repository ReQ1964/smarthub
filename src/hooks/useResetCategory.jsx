import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setFilteredProducts } from "../store/products-slice"

const useResetCategory = () => {
    const dispatch = useDispatch()
    const {pathname} = useLocation()

    useEffect(() => {
        console.log(pathname)
        if(pathname != '/shop'){
            dispatch(setFilteredProducts('all'))
        }
      }, [pathname])
}

export default useResetCategory