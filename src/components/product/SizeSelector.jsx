const sizes = ["S", "M", "L", "XL"];

export default function SizeSelector() {
  return (
    <div className="mt-10">

      <h3 className="font-semibold text-lg mb-4">
        Select Size
      </h3>

      <div className="flex gap-4">

        {sizes.map((size) => (
          <button
            key={size}
            className="h-12 w-12 rounded-xl border border-gray-300 hover:bg-black hover:text-white transition"
          >
            {size}
          </button>
        ))}

      </div>

    </div>
  );
}