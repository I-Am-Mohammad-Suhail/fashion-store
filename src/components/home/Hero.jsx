import hero from "../../assets/images/hero.png";

export default function Hero() {
  return (
    <section className="bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center px-8 py-20">
        <div>
          <p className="uppercase text-gray-500 tracking-widest">
            New Collection
          </p>

          <h1 className="text-6xl font-bold mt-5">
            Summer <br />
            Fashion
          </h1>

          <p className="mt-6 text-gray-600">
            Discover the latest fashion trends.
          </p>

          <button className="bg-black text-white px-8 py-3 rounded-lg mt-8">
            Shop Now
          </button>
        </div>

        <img src={hero} alt="" />
      </div>
    </section>
  );
}