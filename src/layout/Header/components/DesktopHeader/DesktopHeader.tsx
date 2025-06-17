import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import { Link } from "react-router";
import ExpandableMenu from "./components/ExpandableMenu/ExpandableMenu";
import { links } from "./constants";

const DesktopHeader = () => {
  return (
    <div className="w-full bg-white py-6 flex items-center justify-between">
      <h3 className="font-bold text-dark-blue text-xl mr-28">Bandage</h3>
      <div className="w-full flex-grow flex items-center justify-start gap-5 text-sm text-gray font-semibold">
        {links.map((link, index) =>
          link.sublinks ? (
            <ExpandableMenu key={index} link={link} />
          ) : (
            <Link
              key={index}
              to={link.address}
              className="transition hover:text-dark-blue"
            >
              {link.content}
            </Link>
          ),
        )}
      </div>
      <div className="flex items-center justify-start gap-5 text-blue text-sm *:transition *:hover:text-dark-blue">
        <Link
          to="/"
          className="flex items-center justify-start gap-1 font-semibold"
        >
          <UserRound className="w-4 h-4" />
          <p>Login / Register</p>
        </Link>
        <Link to="/" className="flex items-center justify-start gap-1">
          <Search className="w-4 h-4" />
        </Link>
        <Link to="/" className="flex items-center justify-start gap-1">
          <ShoppingCart className="w-4 h-4" />
          <p>1</p>
        </Link>
        <Link to="/" className="flex items-center justify-start gap-1">
          <Heart className="w-4 h-4" />
          <p>1</p>
        </Link>
      </div>
    </div>
  );
};

export default DesktopHeader;
