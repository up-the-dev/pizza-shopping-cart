import { useEffect, useContext, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { CartContext } from "../CartContext"

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
    let [isAdding, setIsAdding] = useState(false)
    let { cart, setCart } = useContext(CartContext)
    const addToCart = (e, product) => {
        e.preventDefault()
        console.log(product)
        const _cart = { ...cart } //this prevents pass by reference
        //checking if cart.item exits
        if (!_cart.item) {
            _cart.item = {}
        }
        //checking if product already in cart
        if (!(_cart.item[product._id])) {
            _cart.item[product._id] = 1
        } else {
            _cart.item[product._id] = _cart.item[product._id] + 1
        }
        if (!_cart.totalItems) {
            _cart.totalItems = 1
        } else {
            _cart.totalItems = _cart.totalItems + 1
        }
        setCart(_cart)
        setIsAdding(true)
        setTimeout(() => {
            setIsAdding(false)
        }, 300)

    }

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

                    <button disabled={isAdding} className={` ${isAdding ? 'bg-green-500' : 'bg-orange-500'} px-3 rounded-full mt-2`} onClick={(e) => {
                        addToCart(e, product)
                    }}>{isAdding ? 'ADDED' : 'ADD TO CART'}</button>
                </div>
            </div>

        </div>
    )
}
export default ProductDetail