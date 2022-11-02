import Product from "./product"
import { useState, useEffect } from "react"

const Products = () => {
    let [products, setproducts] = useState([])

    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(products => setproducts(products))
    }, [])

    return (
        <>
            <div className="container mx-auto">
                <h1 className="pb-10 underline decoration-2 font-semibold text-lg">Products</h1>
                <div className="container grid grid-cols-4 gap-24">
                    {products.map(product => <Product key={product._id} product={product} />)}
                </div>
            </div>

        </>
    )

}
export default Products
