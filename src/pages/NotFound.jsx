import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-7xl font-bold">404</h1>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-black text-white rounded-lg"
      >
        Back Home
      </Link>
    </div>
  );
}