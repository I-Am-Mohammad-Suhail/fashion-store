const colors = [
  "bg-black",
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
];

export default function ColorSelector() {
  return (
    <div className="mt-8">

      <h3 className="font-semibold text-lg mb-4">
        Select Color
      </h3>

      <div className="flex gap-4">

        {colors.map((color, index) => (
          <button
            key={index}
            className={`w-10 h-10 rounded-full border-2 border-gray-300 ${color}`}
          />
        ))}

      </div>

    </div>
  );
}