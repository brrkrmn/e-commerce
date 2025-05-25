import { Facebook, Instagram, Twitter } from "lucide-react";

const MemberCard = ({ member }: { member: { src: string; name: string; profession: string}}) => {
  return (
    <div className="w-full max-w-[310px] flex flex-col items-center justify-center gap-3 my-6">
      <img src={member.src} />
      <h5 className="mt-5 text-dark-blue text-md font-bold">{member.name}</h5>
      <h6 className="text-gray text-sm font-semibold">{member.profession}</h6>
      <div className="flex items-center justify-center gap-3 text-blue mb-5">
        <Facebook />
        <Instagram />
        <Twitter />
      </div>
    </div>
  )
}

export default MemberCard;