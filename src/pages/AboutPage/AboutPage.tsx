import Companies from "./components/Companies/Companies";
import CTA from "./components/CTA/CTA";
import Details from "./components/Details/Details";
import Hero from "./components/Hero/Hero";
import Team from "./components/Team/Team";

const AboutPage = () => {
  return (
    <div className="w-full max-w-[1400px] flex flex-col items-center justify-start">
      <Hero />
      <Details />
      <Team />
      <Companies />
      <CTA />
    </div>
  )
}

export default AboutPage;