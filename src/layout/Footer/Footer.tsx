import { useState } from "react";
import { Link } from "react-router";
import { links } from "./constants";

const Footer = () => {
  const [value, setValue] = useState("");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue("");
  };

  return (
    <div className="w-full flex flex-col font-montserrat tracking-wide *:px-10 *:md:px-48 *:py-12">
      <div className="flex flex-col items-start gap-4 bg-light-gray-1 text-dark-blue md:flex-row md:justify-between">
        <h3 className="font-bold text-2xl">Bandage</h3>
        <div className="flex items-center justify-start gap-6">
          <Link to="/home">
            <img
              className="w-7 h-7"
              src="/src/assets/icons/footer/facebook.svg"
              alt="Facebook logo"
            />
          </Link>
          <Link to="/home">
            <img
              className="w-7 h-7"
              src="/src/assets/icons/footer/instagram.svg"
              alt="Facebook logo"
            />
          </Link>
          <Link to="/home">
            <img
              className="w-7 h-7"
              src="/src/assets/icons/footer/twitter.svg"
              alt="Facebook logo"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-start gap-10 bg-main text-dark-blue lg:flex-row lg:justify-between">
        {links.map((link) => (
          <div className="flex flex-col items-start justify-start gap-4">
            <h5 className="font-bold py-2">{link.title}</h5>
            {link.links.map((l) => (
              <Link to={l.address} className="text-gray font-semibold text-sm">
                {l.content}
              </Link>
            ))}
          </div>
        ))}
        <div className="flex flex-col items-start justify-start gap-2">
          <h5 className="font-bold py-2">Get In Touch</h5>
          <form
            onSubmit={handleSubscribe}
            className="flex items-center justify-center border-light-gray-3 border-1 rounded-sm"
          >
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              placeholder="Your Email"
              className="w-[60%] bg-light-gray-2 py-4 px-2 text-sm rounded-sm font-normal"
            />
            <button
              type="submit"
              className="cursor-pointer w-[40%] bg-blue text-white font-medium rounded-r-sm px-2 py-4 text-sm"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray text-xs font-semibold">
            Lore imp sum dolor Amit
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-light-gray-1 text-gray font-bold sm:text-sm leading-6 md:justify-start md:flex-row md:gap-1 *:text-nowrap">
        <p>Made With Love By</p>
        <p>Finland All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
