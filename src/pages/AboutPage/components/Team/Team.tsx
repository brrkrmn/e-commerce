import { Facebook, Instagram, Twitter } from "lucide-react";
import { members } from "./constants";

const Team = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center gap-12 py-20 md:px-40">
      <h2 className="text-4xl text-dark-blue font-bold">Meet Our Team</h2>
      <div className="flex flex-wrap items-center justify-center gap-4 w-full">
        {members.map((member, index) => (
          //use teamCard component from TeamPage after merge
          <div
            key={index}
            className="w-full max-w-[310px] flex flex-col items-center justify-center gap-3 my-6"
          >
            <img src={member.src} />
            <h5 className="mt-5 text-dark-blue text-md font-bold">
              {member.name}
            </h5>
            <h6 className="text-gray text-sm font-semibold">
              {member.profession}
            </h6>
            <div className="flex items-center justify-center gap-3 text-blue mb-5">
              <Facebook />
              <Instagram />
              <Twitter />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
