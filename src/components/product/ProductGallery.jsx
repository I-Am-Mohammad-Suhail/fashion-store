export default function ProductGallery({ product }) {
  return (
    <div>

      <div className="bg-white rounded-3xl overflow-hidden border">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[600px] object-cover"
        />

      </div>

      <div className="grid grid-cols-4 gap-4 mt-5">

        {[1,2,3,4].map((item)=>(
          <div
            key={item}
            className="border rounded-xl overflow-hidden cursor-pointer hover:border-black"
          >
            <img
              src={product.image}
              alt=""
              className="h-28 w-full object-cover"
            />
          </div>
        ))}

      </div>

    </div>
  );
}