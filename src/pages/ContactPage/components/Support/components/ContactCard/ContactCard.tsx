import React from "react";

const ContactCard = ({
  contact,
  isHighlighted = false,
}: {
  contact: {
    icon: React.ReactNode;
    email: string;
    secondEmail: string;
  };
  isHighlighted?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-between w-full max-w-[328px] shadow-md px-6 py-16 gap-3 ${isHighlighted ? "bg-dark-blue text-white" : "bg-white text-dark-blue"}`}
    >
      <div className="mb-4 text-5xl text-blue *:w-18 *:h-18">
        {contact.icon}
      </div>
      <div className="text-center mb-2 flex flex-col items-center justify-center gap-2 text-sm font-semibold">
        <div className="">{contact.email}</div>
        <div className="">{contact.secondEmail}</div>
      </div>
      <div className="font-semibold text-lg mb-4">Get Support</div>
      <button className="border-1 border-blue rounded-full px-8 py-3 font-semibold text-blue">
        Submit Request
      </button>
    </div>
  );
};

export default ContactCard;
