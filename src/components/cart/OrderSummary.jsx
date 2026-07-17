import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";

export default function OrderSummary() {
  return (
    <aside className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-24 shadow-sm">

      <h2 className="text-2xl font-bold mb-8">
        Order Summary
      </h2>

      <input
        type="text"
        placeholder="Coupon Code"
        className="w-full border rounded-xl p-3 outline-none mb-4"
      />

      <button className="w-full border rounded-xl py-3 hover:bg-black hover:text-white transition">
        Apply Coupon
      </button>

      <div className="space-y-4 mt-8">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$109.98</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>$10.00</span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>$5.00</span>
        </div>

      </div>

      <hr className="my-6" />

      <div className="flex justify-between text-2xl font-bold">

        <span>Total</span>

        <span>$124.98</span>

      </div>

      <button className="w-full bg-black text-white rounded-xl py-4 mt-8 hover:bg-gray-800 hover:scale-105 transition-all duration-300">
        Proceed To Checkout
      </button>

      <div className="flex justify-center gap-6 mt-8 text-4xl text-gray-600">

        <FaCcVisa />

        <FaCcMastercard />

        <FaCcPaypal />

      </div>

    </aside>
  );
}