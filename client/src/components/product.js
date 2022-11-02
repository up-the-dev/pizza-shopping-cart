import { Link } from "react-router-dom"

const Product = (props) => {
    const { product } = props
    return (
        <Link to={`/product/${product._id}`}>
            <div className="text-center">
                <img src={product.image} alt="pizza item" />
                <h1 className="text-lg font-semibold m-1">{product.name}</h1>
                <span className="bg-gray-300 px-3 rounded-full text-sm">{product.size}</span>
                <div className="flex justify-between mt-4">
                    <h2>₹ {product.price}</h2>
                    <button className="px-3 bg-orange-400  rounded-full hover:bg-orange-500">ADD</button>
                </div>
            </div>
        </Link>
    )
}
export default Product