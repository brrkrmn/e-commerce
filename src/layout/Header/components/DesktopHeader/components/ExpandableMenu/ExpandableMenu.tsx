import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import type { ExpandableLink } from "../../types";

const ExpandableMenu = ({ link }: { link: ExpandableLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex items-center justify-center gap-0"
      >
        <p>{link.content}</p>
        <ChevronDown className="w-5 h-5" />
      </button>
      {isOpen && (
        <div className="shadow-2xl p-6 pr-20 absolute top-12 bg-white z-50 flex items-center justify-start gap-24">
          {link.sublinks.map((section, index) => (
            <div
              key={index}
              className="w-full flex flex-col items-start justify-start gap-6"
            >
              <p className="text-dark-blue text-base my-2">
                {section.sectionTitle}
              </p>
              {section.sectionLinks.map((link, index) => (
                <Link key={index} to={link.address} className="transition hover:text-dark-blue">
                  {link.content}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpandableMenu;
