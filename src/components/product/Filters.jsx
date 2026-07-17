const categories = [
  "All",
  "Men",
  "Women",
  "Shoes",
  "Accessories",
];

export default function Filters() {
  return (
    <aside className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-24">

      <h3 className="text-lg font-bold mb-6">
        Categories
      </h3>

      <div className="space-y-2">

        {categories.map((item) => (

          <button
            key={item}
            className="w-full rounded-lg px-4 py-3 text-left transition hover:bg-black hover:text-white"
          >
            {item}
          </button>

        ))}

      </div>

      <div className="border-t my-8"></div>

      <h3 className="text-lg font-bold mb-5">
        Sort By
      </h3>

      <select className="w-full rounded-lg border p-3 outline-none">
        <option>Featured</option>
        <option>Newest</option>
        <option>Price Low → High</option>
        <option>Price High → Low</option>
      </select>

    </aside>
  );
}