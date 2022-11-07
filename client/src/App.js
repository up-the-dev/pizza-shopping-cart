import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navigation from "./components/Navigation"
import ProductsPage from "./pages/ProductsPage"
import Cart from "./pages/Cart"
import ProductDetail from "./pages/ProductDetail"
import { useEffect, useState } from "react"
import { CartContext } from "./CartContext"
const App = () => {
    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem('cart')) || {}
    })
    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])
    return (
        <>
            <Router>
                <CartContext.Provider value={{ cart, setCart }}>
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* <Route path='/about' element={<About />} /> */}
                        <Route path="/products" element={<ProductsPage />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/product/:id" element={< ProductDetail />} />
                    </Routes>
                </CartContext.Provider>
            </Router>
        </>
    )
}
export default App