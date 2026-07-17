import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { motion } from "framer-motion";

export default function CartItem({ product }) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(quantity + 1);

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col md:flex-row gap-6 hover:shadow-lg transition"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-40 h-40 rounded-xl object-cover"
      />

      <div className="flex-1">

        <p className="text-gray-400 uppercase text-sm">
          {product.category}
        </p>

        <h2 className="text-2xl font-semibold mt-2">
          {product.name}
        </h2>

        <p className="text-2xl font-bold mt-4">
          ${(product.price * quantity).toFixed(2)}
        </p>

        <div className="flex items-center gap-3 mt-6">

          <button
            onClick={decrease}
            className="w-10 h-10 rounded-lg border hover:bg-gray-100"
          >
            -
          </button>

          <span className="text-lg font-bold">
            {quantity}
          </span>

          <button
            onClick={increase}
            className="w-10 h-10 rounded-lg border hover:bg-gray-100"
          >
            +
          </button>

        </div>

      </div>

      <button
        onClick={() => alert("Delete functionality will be connected with cart state.")}
        className="text-red-500 hover:text-red-700"
      >
        <FiTrash2 size={22} />
      </button>

    </motion.div>
  );
}