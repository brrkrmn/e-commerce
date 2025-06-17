import ContactCard from "./components/ContactCard/ContactCard";
import { contacts } from "./constants";

const Support = () => {
  return (
    <div className="w-full max-w-[1400px] flex flex-col items-center justify-center gap-20 mx-auto px-4 py-6 font-montserrat tracking-wide text-dark-blue">
      <div className="w-full flex flex-col items-center justify-center gap-6">
        <h6 className="text-sm font-bold">VISIT OUR OFFICE</h6>
        <h2 className="text-3xl md:text-4xl font-bold text-center md:w-[40%] md:leading-12">
          We help small businesses with big ideas
        </h2>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
        {contacts.map((contact, index) => (
          <ContactCard
            contact={contact}
            key={index}
            isHighlighted={index === 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Support;
