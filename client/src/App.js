import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navigation from "./components/Navigation"
import ProductsPage from "./pages/ProductsPage"
import Cart from "./pages/Cart"
import ProductDetail from "./pages/ProductDetail"
const App = () => {
    return (
        <>
            <Router>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path='/about' element={<About />} /> */}
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/product/:id" element={< ProductDetail />} />
                </Routes>
            </Router>
        </>
    )
}
export default App