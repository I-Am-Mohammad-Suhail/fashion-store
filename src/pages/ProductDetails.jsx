import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import RelatedProducts from "../components/product/RelatedProducts";
import products from "../data/products";
import ProductDescription from "../components/product/ProductDescription";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();

  const product =
    products.find((item) => item.id === Number(id)) || products[0];

  return (
    <section className="bg-[#fafafa] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14">

          <ProductGallery product={product} />

          <ProductInfo product={product} />

        </div>

        <ProductDescription />

        <RelatedProducts />

      </div>
    </section>
  );
}