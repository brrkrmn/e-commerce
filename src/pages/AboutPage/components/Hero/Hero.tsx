const Hero = () => {
  return (
    <div className="w-full flex items-center justify-start px-3 xl:px-20">
      <div className="pt-16 lg:p-0 w-full rounded-2xl flex flex-col lg:flex-row items-center justify-start lg:justify-between gap-6 lg:gap-0">
        <div className="lg:p-20 lg:pr-0 flex min-w-fit flex-col w-fit items-center lg:items-start justify-start gap-6 text-dark-blue">
          <p className="text-sm font-bold">ABOUT COMPANY</p>
          <h2 className="text-dark-blue lg:w-fit text-3xl xl:text-5xl font-bold w-[80%] text-center lg:text-start leading-normal">
            ABOUT US
          </h2>
          <h4 className="text-center lg:text-start text-gray font-medium w-[80%] xl:text-md text-base leading-normal">
            We know how large objects will act, but things on a small scale.
          </h4>
          <button className="bg-blue text-white font-semibold text-sm py-3 px-6 rounded-sm shadow-2xs">
            Get Quote Now
          </button>
        </div>
        <img
          src="/src/assets/images/about/hero.png"
          className="max-w-96 w-full lg:max-w-[40%] lg:mt-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
