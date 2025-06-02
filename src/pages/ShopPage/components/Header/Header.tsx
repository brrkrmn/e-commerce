import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="w-full px-4 bg-light-gray-1 py-10 flex flex-col sm:flex-row items-center justify-between gap-12">
      <h2 className="text-2xl font-bold text-dark-blue">Shop</h2>
      <nav className="flex items-center justify-center gap-2 text-sm">
        <Link
          to="/"
          className="font-bold text-dark-blue"
        >
          Home
        </Link>
        <ChevronRight className="text-gray-2 stroke-[1.5px]" />
        <Link to="/shop" className="text-gray font-semibold">Shop</Link>
      </nav>
    </div>
  );
};

export default Header;
