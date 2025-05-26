import { useEffect, useState } from "react";
import { Link } from "react-router";
import ProductCard from "../../../../components/ProductCard/ProductCard";
import { products } from "./constants";

const useIsMdUp = () => {
  const [isMdUp, setIsMdUp] = useState(() => window.innerWidth >= 768);

  useEffect(() => {
    const handler = () => setIsMdUp(window.innerWidth >= 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return isMdUp;
}

const Products = () => {
  const isMdUp = useIsMdUp();
  const visibleProducts = isMdUp ? products.slice(0, 10) : products.slice(0, 8);

  return (
    <div className="flex flex-col w-full max-w-[1400px] mx-auto items-center justify-start pt-32 gap-16">
      <div className="flex flex-col items-center justify-center px-10 gap-4">
        <h4 className="text-gray text-lg font-medium">Featured Products</h4>
        <h3 className="text-xl font-bold text-dark-blue px-10 text-center">
          BESTSELLER PRODUCTS
        </h3>
        <p className="text-gray text-sm font-medium text-center">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-16 md:flex-row flex-wrap">
        {visibleProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <Link
        to="/shop"
        className="border-1 text-blue text-sm font-semibold px-8 py-3 rounded-sm"
      >
        LOAD MORE PRODUCTS
      </Link>
    </div>
  );
};

export default Products;
