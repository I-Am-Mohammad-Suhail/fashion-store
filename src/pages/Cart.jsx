import CartItem from "../components/cart/CartItem";
import OrderSummary from "../components/cart/OrderSummary";
import products from "../data/products";

export default function Cart() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-14">

      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            Your Shopping Cart
          </h1>

          <p className="text-gray-500 mt-2">
            Review your selected products before checkout.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2 space-y-6">

            {products.slice(0, 2).map((item) => (
              <CartItem
                key={item.id}
                product={item}
              />
            ))}

          </div>

          <OrderSummary />

        </div>

      </div>

    </section>
  );
}