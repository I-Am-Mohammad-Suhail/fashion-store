
import hero from "../../assets/hero.png";

export default function Hero() {
  return (
    <section className="bg-[#faf8f4] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="grid lg:grid-cols-2 items-center gap-10">

          {/* Left */}

          <div>

            <p className="uppercase tracking-[4px] text-xs text-gray-400 font-medium mb-5">
              NEW COLLECTION
            </p>

            <h1 className="text-6xl font-bold leading-none text-gray-900">
              Summer
              <br />
              Fashion
            </h1>

            <p className="mt-6 text-gray-500 text-base leading-7 max-w-md">
              Discover the latest trends in fashion. Stylish,
              modern and comfortable outfits for every occasion.
            </p>

            <button className="mt-8 bg-black hover:bg-gray-900 text-white px-7 py-3 rounded-md transition">
              Shop Now
            </button>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <img
              src={hero}
              alt="Hero"
              className="w-full max-w-lg object-contain"
            />

          </div>

        </div>

      </div>
    </section>
  );
}