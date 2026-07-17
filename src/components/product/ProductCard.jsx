import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover group-hover:scale-105 transition duration-500"
        />

        <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow">
          <FiHeart />
        </button>
      </div>

      <div className="p-5">
        <p className="text-sm text-gray-500">{product.category}</p>

        <h3 className="font-semibold text-lg mt-1">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 text-yellow-500 mt-2">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <div className="flex justify-between items-center mt-5">
          <span className="text-xl font-bold">${product.price}</span>

          <Link
            to={`/product/${product.id}`}
            className="bg-black text-white rounded-full p-3"
          >
            <FiShoppingBag />
          </Link>
        </div>
      </div>
    </div>
  );
}