import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <div className="bg-white border border-dashed border-gray-300 rounded-2xl py-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          No Products Found
        </h2>

        <p className="text-gray-500 mt-2">
          Try another category or search keyword.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}