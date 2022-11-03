const Cart = () => {

    return (
        <div className="container mx-auto lg:w-1/2 w-full pb-24">
            <h1 className="font-semibold mt-8">Cart items</h1>
            <ul >
                <li className="mt-8">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-3 items-center">
                            <img src="/images/peproni.png" className="w-16" />
                            <h1 className="font-medium">Double peproni</h1>
                        </div>
                        <div>
                            <button className="bg-orange-400 px-3 rounded-full">-</button>
                            <span className="mx-2">2</span>
                            <button className="bg-orange-400 px-3  rounded-full">+</button>
                        </div>
                        <h1>₹ 500</h1>
                        <button className="bg-red-500 text-white px-3 rounded-full">Delete</button>
                    </div>
                </li>
                <li className="mt-8">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-3 items-center">
                            <img src="/images/peproni.png" className="w-16" />
                            <h1 className="font-medium">Double peproni</h1>
                        </div>
                        <div>
                            <button className="bg-orange-400 px-3 rounded-full">-</button>
                            <span className="mx-2">2</span>
                            <button className="bg-orange-400 px-3  rounded-full">+</button>
                        </div>
                        <h1>₹ 500</h1>
                        <button className="bg-red-500 text-white px-3 rounded-full">Delete</button>
                    </div>
                </li>
            </ul>
            <hr className="mt-8" />
            <div className="mt-6 text-right">
                <b>Grand Total:</b> ₹ 1000
            </div>
            <div className="text-right">
                <button className="bg-orange-400 px-4 mt-4 rounded-full py-1">Order Now</button>
            </div>
        </div>
    )
}
export default Cart