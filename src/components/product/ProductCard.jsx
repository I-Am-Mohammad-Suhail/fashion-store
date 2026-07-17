import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl duration-300 group">

      <div className="relative bg-[#f8f8f8]">

        <button className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 shadow hover:text-red-500">
          <FiHeart />
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover group-hover:scale-105 duration-300"
        />

      </div>

      <div className="p-4">

        <h3 className="font-semibold text-sm">
          {product.name}
        </h3>

        <p className="text-lg font-bold mt-2">
          ${product.price}
        </p>

        <div className="flex gap-1 mt-2 text-yellow-500 text-xs">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

      </div>

    </div>
  );
}