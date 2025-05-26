import { Play } from "lucide-react";
import { statistics } from "./constants";

const Details = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start py-20 px-8 md:px-64 text-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-20">
        <div className="flex items-center justify-center flex-col gap-4 md:items-start md:text-start">
          <p className="text-red text-xs font-medium">Problems trying</p>
          <h3 className="text-dark-blue text-xl font-semibold">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <p className="text-gray text-sm text-start">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row py-26 w-full">
        {statistics.map((statistic, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start gap-3 md:gap-4 text-center flex-grow"
          >
            <h2 className="text-dark-blue font-bold text-5xl">
              {statistic.title}
            </h2>
            <h5 className="text-gray font-semibold text-sm">
              {statistic.description}
            </h5>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center relative">
        <img src="/src/assets/images/about/video.png" className="rounded-xl" />
        <div className="rounded-full bg-blue flex items-center justify-center p-4 absolute">
          <Play className="fill-white text-white" />
        </div>
      </div>
    </div>
  );
};

export default Details;
