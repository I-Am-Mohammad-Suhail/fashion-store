import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-3xl font-extrabold tracking-wide"
        >
          FASHION STORE
        </NavLink>

        {/* Menu */}
        <nav className="flex items-center gap-10 text-lg font-medium">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-black font-bold"
                : "text-gray-600 hover:text-black transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-black font-bold"
                : "text-gray-600 hover:text-black transition"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-black font-bold"
                : "text-gray-600 hover:text-black transition"
            }
          >
            Cart
          </NavLink>

        </nav>

      </div>
    </header>
  );
}