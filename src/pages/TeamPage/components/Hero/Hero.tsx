import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-6 md:px-40">
      <h5 className="text-gray text-xs font-semibold">WHAT WE DO</h5>
      <h2 className="text-3xl font-bold text-dark-blue text-center px-4">
        Innovation tailored for you
      </h2>
      <div className="flex items-center justify-center gap-2 text-sm font-semibold text-gray">
        <Link to="/" className="text-dark-blue">
          Home
        </Link>
        <ChevronRight className="stroke-1" />
        <Link to="/team" className="">
          Team
        </Link>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-6">
        <img
          src="/src/assets/images/teampage/hero1.png"
          className="basis-1/2 md:p-2"
        />
        <div className="flex flex-col items-center justify-center gap-4 basis-1/2">
          <div className="flex items-center justify-center gap-4 *:overflow-hidden *:w-full *:aspect-square *:object-cover">
            <img src="/src/assets/images/teampage/hero2.png" />
            <img src="/src/assets/images/teampage/hero3.png" />
          </div>
          <div className="flex items-center justify-center gap-4 *:overflow-hidden *:w-full *:aspect-square *:object-cover">
            <img src="/src/assets/images/teampage/hero4.png" />
            <img src="/src/assets/images/teampage/hero5.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
