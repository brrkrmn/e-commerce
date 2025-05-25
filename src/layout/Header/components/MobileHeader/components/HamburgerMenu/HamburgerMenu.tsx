import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { links } from "./constants";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <button onClick={() => setIsOpen(true)} className="hover:text-blue cursor-pointer transition">
        <Menu />
      </button>
      {isOpen && (
        <div className="w-52 h-full bg-white shadow-2xl fixed top-0 right-0 p-6 flex flex-col items-start justify-start gap-2 text-gray text-xl font-medium ">
          <button
            className="ml-auto hover:text-blue cursor-pointer transition"
            onClick={() => setIsOpen(false)}
          >
            <X className="" />
          </button>
          <span className="h-0 border-1 rounded-full border-light-gray-3 w-full"></span>
          {links.map((link, index) => (
            <Link to={link.address} key={index} className="my-2">
              {link.content}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
