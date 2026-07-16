import { NavLink } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        <h1 className="text-2xl font-bold">
          FASHION STORE
        </h1>

        <nav className="hidden md:flex gap-8 font-medium">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </nav>

        <div className="flex items-center gap-5 text-xl">
          <FiSearch />
          <FiHeart />
          <FiShoppingCart />
        </div>

      </div>
    </header>
  );
}