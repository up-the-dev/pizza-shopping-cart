import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { CartContext } from "../CartContext"

const Product = (props) => {
    const { product } = props
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
        <Link to={`/product/${product._id}`}>
            <div className="text-center">
                <img src={product.image} alt="pizza item" />
                <h1 className="text-lg font-semibold m-1">{product.name}</h1>
                <span className="bg-gray-300 px-3 rounded-full text-sm">{product.size}</span>
                <div className="flex justify-between mt-4">
                    <h2>₹ {product.price}</h2>
                    <button disabled={isAdding} className={` ${isAdding ? 'bg-green-500' : 'bg-orange-400'} px-3 rounded-full`} onClick={(e) => {
                        addToCart(e, product)
                    }}>ADD{isAdding ? 'ED' : ''}</button>
                </div>
            </div>
        </Link>
    )
}
export default Product