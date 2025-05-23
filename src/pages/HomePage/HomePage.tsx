import Clients from "../../components/Clients/Clients";
import Category from "./components/Category/Category";
import Hero from "./components/Hero/Hero";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start font-montserrat tracking-wide max-w-[1400px] mx-auto">
      <Hero />
      <Clients />
      <Category />
    </div>
  );
};

export default HomePage;
