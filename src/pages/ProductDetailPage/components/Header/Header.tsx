import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="w-full bg-light-gray-1 py-10 md:py-0 flex flex-col sm:flex-row items-center justify-start gap-12">
      <nav className="flex items-center justify-center gap-2 text-sm">
        <Link to="/" className="font-bold text-dark-blue">
          Home
        </Link>
        <ChevronRight className="text-gray-2 stroke-[1.5px]" />
        <Link to="/shop" className="text-gray font-semibold">
          Shop
        </Link>
      </nav>
    </div>
  );
};

export default Header;
