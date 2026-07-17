import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}