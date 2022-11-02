import Products from "../components/Products"

const Home = () => {

    return (
        <>
            <div className="hero py-16">
                <div className=" container flex mx-auto justify-between items-center">
                    <div className="ml-10 w-1/2">
                        <h6 className="text-lg font-normal italic">
                            Are you hungry?
                        </h6>
                        <h1 className="text-3xl md:text-6xl font-bold ">
                            Don't Wait!
                        </h1>
                        <button className="py-2 px-6 bg-orange-500 mt-4 rounded-full text-white font-bold hover:bg-orange-600">
                            Order Now
                        </button>
                    </div>
                    <div className="w-1/2">
                        <img src="/images/pizza.png" className="w-4/5" alt="pizzaImage" />
                    </div>
                </div>
            </div>
            <div className="pb-12 mx-24">
                <Products />
            </div>

        </>
    )
}
export default Home