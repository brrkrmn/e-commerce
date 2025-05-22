import { Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import { Link } from "react-router";
import { links } from "./constants";

const MobileHeader = () => {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-10 bg-white py-10 px-8">
      <div className="w-full flex items-center justify-between">
        <h3 className="font-bold text-dark-blue text-xl">Bandage</h3>
        <div className="flex items-center justify-start gap-4 *:stroke-[1.5px] *:hover:stroke-2">
          <UserRound />
          <Search />
          <ShoppingCart />
          <Menu />
        </div>
      </div>
      <div className="py-4 w-full flex flex-col md:flex-row items-center justify-center gap-6 text-xl text-gray font-medium">
        {links.map(link => (
          <Link to={link.address} key={link.content}>{link.content}</Link>
        ))}
      </div>
    </div>
  );
};

export default MobileHeader;
