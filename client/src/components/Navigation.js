import { Link } from "react-router-dom"
const Navigation = () => {
    const cartStyle = {
        backgroundColor: 'rgb(249, 115, 22)',
        borderRadius: '20px',
        padding: '6px 12px',
        display: 'flex'
    }
    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-2">
                <Link to='/'><img className="h-12" src="/images/logo.png" alt="logo" /></Link>
                <ul className="flex items-center">
                    <li className="hover:underline transition ease-in-out"><Link to='/'>Home</Link></li>
                    <li className="ml-6 "><Link to='/products'>Products</Link></li>
                    <li className="ml-6"><Link to='/cart'>
                        <div style={cartStyle}>
                            <span>10</span>
                            <img src="/images/cart.png" alt="cart-icon" />
                        </div>
                    </Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Navigation