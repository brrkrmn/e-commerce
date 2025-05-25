import CTA from "./components/CTA/CTA";
import Hero from "./components/Hero/Hero";

const ContactPage = () => {
  return (
    <div className="w-full max-w-[1400px] flex flex-col items-center justify-start gap-20 mx-auto px-4 py-6 font-montserrat tracking-wide">
      <Hero />
      <CTA />
    </div>
  );
};

export default ContactPage;
