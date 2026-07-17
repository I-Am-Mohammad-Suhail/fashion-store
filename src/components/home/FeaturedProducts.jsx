import products from "../../data/products";
import ProductCard from "../product/ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-8">

      <h2 className="text-2xl font-bold mb-8">
        FEATURED PRODUCTS
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}