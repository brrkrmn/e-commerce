import MemberCard from "./components/MemberCard/MemberCard";
import { members } from "./constants";

const Members = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center gap-12 py-12 md:px-40">
      <h2 className="text-4xl text-dark-blue font-bold">Meet Our Team</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {members.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  )
}

export default Members;