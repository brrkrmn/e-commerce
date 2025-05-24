import { features } from "./constants";

const Features = () => {
  return (
    <div className="w-full max-w-[1400px] flex flex-col items-center justify-center px-10 gap-10 xl:px-72 py-20">
      <div className="flex flex-col items-center justify-center px-10 gap-4">
        <h4 className="text-gray text-lg font-medium">Featured Products</h4>
        <h3 className="text-xl font-bold text-dark-blue px-10 text-center">
          BESTSELLER PRODUCTS
        </h3>
        <p className="text-gray text-sm font-medium text-center">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 py-10">
        {features.map((feature, index) => (
          <div className="flex-1 text-center flex flex-col items-center justify-start gap-4" key={index}>
            <img src={feature.src} />
            <h3 className="text-xl font-bold text-dark-blue">{feature.title}</h3>
            <p className="text-gray text-sm font-medium">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features;