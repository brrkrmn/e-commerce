const CTA = () => {
  return (
    <div className="w-full flex items-center justify-center h-fit">
      <div className="bg-blue-2 flex flex-col items-center md:items-start text-center md:text-start justify-center gap-8 text-white p-10 md:p-42 py-20">
        <h5 className="text-sm font-semibold">WORK WITH US</h5>
        <h2 className="text-4xl font-bold">Now Let’s Grow Yours</h2>
        <p className="text-sm">
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th
        </p>
        <button className="border-1 border-white px-8 rounded-md py-4">
          Try it free now
        </button>
      </div>
      <img
        src="/src/assets/images/about/cta.png"
        className="aspect-square object-cover hidden md:block"
      />
    </div>
  );
}

export default CTA;