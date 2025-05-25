import FreeTrial from "./components/FreeTrial/FreeTrial";
import Hero from "./components/Hero/Hero";
import Members from "./components/Members/Members";

const TeamPage = () => {
  return (
    <div className="w-full max-w-[1400px] flex flex-col items-center justify-start font-montserrat tracking-wide py-6 md:py-16 mx-auto">
      <Hero />
      <Members />
      <FreeTrial />
    </div>
  );
};

export default TeamPage;
