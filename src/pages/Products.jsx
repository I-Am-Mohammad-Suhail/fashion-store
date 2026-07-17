import { useMemo, useState } from "react";

import products from "../data/products";
import categories from "../data/categories";

import SearchBar from "../components/product/SearchBar";
import Filters from "../components/product/Filters";
import ProductGrid from "../components/product/ProductGrid";

export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchCategory =
        category === "All" || item.category === category;

      const matchSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [search, category]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-8">
        Our Products
      </h1>

      <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <Filters
          categories={categories}
          selected={category}
          onSelect={setCategory}
        />
      </div>

      <ProductGrid products={filteredProducts} />

    </div>
  );
}