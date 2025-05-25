const AboutUs = () => {
  return (
    <div className="w-full max-w-[1400px] flex flex-col-reverse items-center justify-center px-10 gap-10 md:flex-row xl:px-72 py-20">
      <img
        src="/src/assets/images/homepage/about-us-cover.png"
        className="w-full flex-1 object-cover md:w-[40%]"
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-6">
        <h5 className="text-blue font-bold text-md">Featured Products</h5>
        <h2 className="text-dark-blue text-4xl font-bold">
          We love what we do
        </h2>
        <p className="text-gray text-sm font-medium">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
        <p className="text-gray text-sm font-medium">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanic.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
