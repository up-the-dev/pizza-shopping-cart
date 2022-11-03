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
            <div className="container mx-auto pb-24 ">
                <h1 className="underline decoration-2 font-semibold text-lg my-8">Products</h1>
                <div className="grid grid-cols-5 my-8 gap-24">
                    {products.map(product => <Product key={product._id} product={product} />)}
                </div>
            </div>

        </>
    )

}
export default Products
