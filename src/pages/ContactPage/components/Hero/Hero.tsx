import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="w-full md:w-[90%] flex flex-col items-center justify-start gap-10 md:flex-row md:px-10">
      <div className="flex flex-col items-center md:items-start justify-start gap-8 text-dark-blue text-center md:text-start">
        <h5 className="text-xs font-bold md:text-lg">CONTACT US</h5>
        <h2 className="text-3xl font-bold md:text-5xl">Get in touch today!</h2>
        <h4 className="text-gray text-sm font-medium w-[70%]">
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </h4>
        <div className="flex flex-col items-center justify-start gap-2 text-dark-blue font-bold md:items-start">
          <h3>Phone : +451 215 215</h3>
          <h3>Fax : +451 215 215</h3>
        </div>
        <div className="flex items-center justify-start gap-4 *:stroke-2">
          <Link to="/">
            <Twitter />
          </Link>
          <Link to="/">
            <Facebook />
          </Link>
          <Link to="/">
            <Instagram />
          </Link>
          <Link to="/">
            <Linkedin />
          </Link>
        </div>
      </div>
      <img
        src="/src/assets/images/contact/hero.png"
        className="w-full max-w-[400px] md:max-w-[600px]"
      />
    </div>
  );
};

export default Hero;
