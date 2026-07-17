import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
    <div className="flex items-center bg-white rounded-xl border border-gray-200 px-4 py-3 shadow-sm w-full md:w-96">

      <FiSearch className="text-gray-400 text-lg" />

      <input
        type="text"
        placeholder="Search for products..."
        className="ml-3 w-full outline-none bg-transparent"
      />

    </div>
  );
}