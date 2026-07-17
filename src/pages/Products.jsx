import SearchBar from "../components/product/SearchBar";
import Filters from "../components/product/Filters";
import ProductGrid from "../components/product/ProductGrid";
import products from "../data/products";

export default function Products() {
  return (
    <section className="bg-[#fafafa] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

          <div>

            <h1 className="text-4xl font-bold">
              Our Collection
            </h1>

            <p className="text-gray-500 mt-2">
              Browse our premium fashion collection.
            </p>

          </div>

          <SearchBar />

        </div>

        {/* Main Layout */}

        <div className="grid grid-cols-12 gap-8">

          {/* Sidebar */}

          <div className="col-span-12 lg:col-span-3">

            <Filters />

          </div>

          {/* Products */}

          <div className="col-span-12 lg:col-span-9">

            <ProductGrid products={products} />

          </div>

        </div>

      </div>
    </section>
  );
}