import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"


const ProductDetail = () => {
    let [product, setproduct] = useState({})
    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`/api/product/${params.id}`)
            .then(res => res.json())
            .then(product => {
                setproduct(product)
            })
    }, [params.id])
    return (
        <div className="container mx-auto mt-10">
            <button className="font-medium" onClick={() => {
                navigate(-1)
            }}>Back</button>
            <div className="flex gap-14 mt-10">
                <img src={product.image} alt="product_image" />
                <div className="flex flex-col justify-center gap-2">
                    <h1 className="text-xl font-medium">{product.name}</h1>
                    <span>{product.size}</span>
                    <h2 className="font-medium">₹ {product.price}</h2>
                    <button className="bg-orange-500 mt-2 rounded-lg">Add to cart</button>

                </div>
            </div>

        </div>
    )
}
export default ProductDetail