import Clients from "../../components/Clients/Clients";
import AboutUs from "./components/AboutUs/AboutUs";
import Category from "./components/Category/Category";
import FeaturedPosts from "./components/FeaturedPosts/FeaturedPosts";
import Features from "./components/Features/Features";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start font-montserrat tracking-wide max-w-[1400px] mx-auto">
      <Hero />
      <Clients />
      <Category />
      <Products />
      <AboutUs />
      <Features />
      <FeaturedPosts />
    </div>
  );
};

export default HomePage;
