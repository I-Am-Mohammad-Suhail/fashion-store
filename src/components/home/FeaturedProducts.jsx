import products from "../../data/products";
import ProductCard from "../product/ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-8">
      <h2 className="text-3xl font-bold mb-10">
        Featured Products
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}