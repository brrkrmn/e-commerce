import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Clients from "../../components/Clients/Clients";
import BestsellerProducts from "./components/BestsellerProducts/BestsellerProducts";
import Header from "./components/Header/Header";
import { type Product, products } from "./constants";

const ProductDetailPage = () => {
  const [product, setProduct] = useState<Product>();
  const id = useParams().id;

  useEffect(() => {
    setProduct(products.find((p) => p.id === id));
  }, [id]);

  if (!product) return null;

  return (
    <div className="w-full flex flex-col items-center justify-start mx-auto min-h-screen font-montserrat tracking-wide">
      <div className="w-full px-10 bg-light-gray-2 py-10 flex flex-col items-center justify-center gap-4">
        <div className="w-full max-w-[1400px] flex items-center justify-center">
          <Header />
          {/* + product hero*/}
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-start px-4">
        {/* product detail */}
      </div>
      <div className="w-full flex items-center justify-center bg-light-gray-2">
        <div className="w-full max-w-[1400px] flex flex-col items-center justify-start">
          <BestsellerProducts />
          <Clients />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
