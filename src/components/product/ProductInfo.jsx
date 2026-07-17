import { FaStar } from "react-icons/fa";

export default function ProductInfo({ product }) {
  return (
    <div>

      <p className="uppercase tracking-[4px] text-gray-500">
        {product.category}
      </p>

      <h1 className="text-5xl font-bold mt-3">
        {product.name}
      </h1>

      <div className="flex items-center gap-2 mt-5 text-yellow-500">

        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />

        <span className="text-gray-500 ml-2">
          (124 Reviews)
        </span>

      </div>

      <h2 className="text-4xl font-bold mt-8">
        ${product.price}
      </h2>

      <p className="text-gray-500 leading-8 mt-8">
        Premium quality fashion product made with
        comfortable fabric. Perfect for casual,
        office and daily wear.
      </p>

    </div>
  );
}