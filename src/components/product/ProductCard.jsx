import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">

      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
        />

        <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow hover:text-red-500 transition">
          <FiHeart />
        </button>

      </div>

      {/* Content */}

      <div className="p-5">

        <p className="text-sm text-gray-500">
          {product.category}
        </p>

        <h2 className="text-xl font-semibold mt-2">
          {product.name}
        </h2>

        <div className="flex gap-1 text-yellow-500 mt-3">
          {[1,2,3,4,5].map((item)=>(
            <FaStar key={item}/>
          ))}
        </div>

        <div className="flex items-center justify-between mt-5">

          <span className="text-2xl font-bold">
            ${product.price}
          </span>

        </div>

        <Link
          to={`/product/${product.id}`}
          className="block mt-6  bg-white text-white text-center py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Add To Cart
        </Link>

      </div>

    </div>
  );
}