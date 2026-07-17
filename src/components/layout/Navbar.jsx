import { NavLink } from "react-router-dom";
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiSun,
} from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6">

        {/* Logo */}

        <h1 className="font-extrabold text-lg tracking-wide">
          FASHION STORE
        </h1>

        {/* Menu */}

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-semibold" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "font-semibold" : ""
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "font-semibold" : ""
            }
          >
            Cart
          </NavLink>

          <a href="#">Wishlist</a>

        </nav>

        {/* Right */}

        <div className="flex items-center gap-4">

          <div className="hidden lg:flex items-center border rounded-md px-3 h-9 w-60">

            <FiSearch className="text-gray-400" />

            <input
              type="text"
              placeholder="Search products..."
              className="ml-2 w-full outline-none text-sm"
            />

          </div>

          <button className="text-lg hover:text-orange-500">
            <FiSun />
          </button>

          <button className="text-lg hover:text-red-500">
            <FiHeart />
          </button>

          <button className="text-lg hover:text-blue-600">
            <FiShoppingCart />
          </button>

          <button className="text-lg hover:text-gray-700">
            <FiUser />
          </button>

        </div>

      </div>
    </header>
  );
}