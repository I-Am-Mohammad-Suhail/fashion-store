import { useState } from "react";

const categories = [
  "All",
  "Men",
  "Women",
  "Shoes",
  "Accessories",
];

export default function Filters() {
  const [active, setActive] = useState("All");

  return (
    <aside className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sticky top-24">

      <h2 className="text-2xl font-bold mb-6">
        Categories
      </h2>

      <div className="space-y-3">

        {categories.map((category) => (

          <button
            key={category}
            onClick={() => setActive(category)}
            className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300
              ${
                active === category
                  ? "bg-black text-white shadow-md"
                  : "hover:bg-gray-100"
              }`}
          >
            {category}
          </button>

        ))}

      </div>

      <hr className="my-8" />

      <h2 className="text-2xl font-bold mb-5">
        Sort By
      </h2>

      <select className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:border-black">
        <option>Featured</option>
        <option>Newest</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>

    </aside>
  );
}