import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContext'

const Cart = () => {
    const [products, setProducts] = useState([])
    let { cart, setCart } = useContext(CartContext)
    let totalSum = 0
    let [cartFetched, setIscartFetched] = useState(false)//this is because we don't want to send request to server on any change in cart, if cart is once fetched the we don't need to fetch it again. server requests are costly operation.

    const getquantity = (product) => {
        return cart.item[product._id]
    }
    const getPrice = (product) => {
        const price = getquantity(product) * product.price
        totalSum = totalSum + price
        return price
    }
    const decrementQnt = (product) => {
        let _cart = { ...cart }
        if (_cart.item[product._id] == 1) {
            return
        }
        _cart.item[product._id] = _cart.item[product._id] - 1
        _cart.totalItems = _cart.totalItems - 1
        setCart(_cart)
    }
    const incrementQnt = (product) => {
        let _cart = { ...cart }
        _cart.item[product._id] = _cart.item[product._id] + 1
        _cart.totalItems = _cart.totalItems + 1
        setCart(_cart)
    }
    const deleteProduct = (product) => {
        let _cart = { ...cart }
        _cart.totalItems = _cart.totalItems - getquantity(product)
        delete _cart.item[product._id]
        setCart(_cart)
        const updatedProdList = products.filter(prod => prod._id !== product._id)
        setProducts(updatedProdList)

    }
    const placeOrder = () => {
        window.alert('Order placed successfully !')
        setCart({})
        setProducts([])
    }

    useEffect(() => {
        if (!cart.item) {
            return
        }
        if (cartFetched) {
            return
        }
        fetch('/api/products/cart-items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ids: Object.keys(cart.item) })
        }).then(res => res.json())
            .then((res) => {
                setProducts(res.products)
                setIscartFetched(true)
            })
    }, [cart])

    return (
        <div className="container mx-auto lg:w-1/2 w-full pb-24">
            {!cart.totalItems ?
                <div>
                    <img src='images/empty-cart.png' />
                    <h1 className='text-3xl font-medium font-serif text-center'>Cart is empty</h1>
                </div> :
                <>
                    <h1 className="font-semibold mt-8">Cart items</h1>
                    <ul >
                        {
                            products.map(product => {
                                return (
                                    <li className="mt-8 mb-12" key={product._id}>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <img src={product.image} className="h-16" alt="product" />
                                                <h1 className="font-medium ml-2">{product.name}</h1>
                                            </div>
                                            <div>
                                                <button className={`${getquantity(product) === 1 ? `bg-orange-300` : `bg-orange-400`} px-3 py-1 rounded-full leading-none`} onClick={() => {
                                                    decrementQnt(product)
                                                }}>-</button>
                                                <span className='mx-2' >{getquantity(product)}</span>
                                                <button className="bg-orange-400 px-3 py-1 rounded-full leading-none" onClick={() => {
                                                    incrementQnt(product)
                                                }}>+</button>
                                            </div>
                                            <h1 className='font-medium'>₹ {getPrice(product)}</h1>
                                            <button className="bg-red-500 text-white px-3 py-1 rounded-full" onClick={() => {
                                                deleteProduct(product)
                                            }}>Delete</button>
                                        </div>
                                    </li>
                                )
                            })}
                    </ul>
                    <hr className="mt-8" />
                    <div className="mt-6 text-right">
                        <b>Grand Total:</b> ₹ {totalSum}
                    </div>
                    <div className="text-right">
                        <button className="bg-orange-500 px-4 mt-4 rounded-full py-1" onClick={placeOrder}>Order Now</button>
                    </div>
                </>
            }


        </div>
    )
}
export default Cart