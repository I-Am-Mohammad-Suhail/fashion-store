export default function Filters({
  categories,
  selected,
  onSelect,
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-5 py-2 rounded-full border ${
            selected === cat
              ? "bg-black text-white"
              : "bg-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}