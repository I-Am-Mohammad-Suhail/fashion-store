export default function QuantitySelector() {
  return (
    <div className="mt-8">

      <h3 className="font-semibold text-lg mb-4">
        Quantity
      </h3>

      <div className="flex items-center border rounded-xl w-fit overflow-hidden">

        <button className="px-5 py-3 hover:bg-gray-100">
          -
        </button>

        <span className="px-6">
          1
        </span>

        <button className="px-5 py-3 hover:bg-gray-100">
          +
        </button>

      </div>

    </div>
  );
}