import { Link } from "react-router";
import { sponsors } from "./constants";

const Sponsors = () => {
  return (
    <div className="w-full max-w-[1400px] py-16 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
      {sponsors.map((sponsor, index) => (
        <Link to={sponsor.address} key={index} className="w-24 h-14 flex justify-center items-center">
          <img src={sponsor.src} className="w-full h-full text-gray-500" />
        </Link>
      ))}
    </div>
  )
}

export default Sponsors;