import ProductCard from "../../../../components/ProductCard/ProductCard";
import { products } from "../../constants";

const BestsellerProducts = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 gap-8 px-10 md:px-40 lg:px-64">
      <h3 className="font-bold text-dark-blue text-2xl text-center md:text-start">BESTSELLER PRODUCTS</h3>
      <hr className="border-1 border-light-gray-3 w-full h-0"></hr>
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>  )
}

export default BestsellerProducts;