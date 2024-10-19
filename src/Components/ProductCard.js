const ProductCard = ({ product }) => (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
        <img src={product.image} alt={product.name}
            className="w-full h-40 sm:h-48 object-cover mb-4" />
        <h3 className="font-bold text-sm md:text-base mb-2">{product.name}</h3>
        <div className="flex w-full space-x-2">
            <button className="text-white bg-black w-1/2 p-2 text-xs md:text-sm hover:bg-purple-700 focus:outline-none">
                Add to Cart
            </button>
            <button className="text-white bg-[#89089F] w-1/2 p-2 text-xs md:text-sm hover:bg-gray-700 focus:outline-none">
                Quick View
            </button>
        </div>

        <div className="flex justify-between items-center mb-2">
            <span className="text-purple-600 font-bold text-sm md:text-base">₹ {product.price.toFixed(2)}</span>
            <div className="flex text-xs md:text-sm">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < product.rating ? "text-black" : "text-gray-300"}>★</span>
                ))}
            </div>
        </div>
        <p className="text-black font-normal text-xs md:text-sm mt-2">Running</p>
    </div>
);
export default ProductCard;