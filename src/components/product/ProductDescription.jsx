export default function ProductDescription() {
  return (
    <section className="mt-20 bg-white rounded-3xl border border-gray-200 p-8">

      <h2 className="text-3xl font-bold mb-6">
        Product Description
      </h2>

      <p className="text-gray-600 leading-8">
        Crafted from premium quality fabric, this fashion piece combines
        comfort, durability and modern style. Designed for everyday wear,
        it offers a perfect fit with a clean contemporary look.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10">

        <div>

          <h3 className="font-semibold text-xl mb-4">
            Features
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li>✔ Premium Cotton Fabric</li>
            <li>✔ Soft & Breathable</li>
            <li>✔ Lightweight Design</li>
            <li>✔ Modern Fit</li>
            <li>✔ Machine Washable</li>
          </ul>

        </div>

        <div>

          <h3 className="font-semibold text-xl mb-4">
            Specifications
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li>Material : 100% Cotton</li>
            <li>Fit : Regular</li>
            <li>Sleeve : Half Sleeve</li>
            <li>Neck : Round Neck</li>
            <li>Country : India</li>
          </ul>

        </div>

      </div>

    </section>
  );
}