import products from "../../data/products";
import ProductCard from "./ProductCard";

export default function RelatedProducts() {
  return (
    <section className="mt-20">

      <div className="flex items-center justify-between mb-8">

        <h2 className="text-3xl font-bold">
          Related Products
        </h2>

        <button className="text-black font-semibold hover:underline">
          View All
        </button>

      </div>

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

        {products.slice(0, 4).map((item) => (
          <ProductCard
            key={item.id}
            product={item}
          />
        ))}

      </div>

    </section>
  );
}