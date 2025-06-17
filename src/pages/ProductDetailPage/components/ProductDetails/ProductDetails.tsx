import type { Product } from "../../constants";

const ProductDetails = ({ product }: { product: Product }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 gap-4">
      <div className="flex items-center justify-center gap-2 sm:gap-14 text-xs sm:text-sm text-gray font-semibold">
        <button>Description</button>
        <button>Additional Information</button>
        <button className="flex items-center justify-center gap-1">
          <p>Reviews</p>
          <p className="text-green text-nowrap">( 0 )</p>
        </button>
      </div>
      <hr className="border-1 border-light-gray-3 w-full h-0"></hr>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <img src={product.src} />
        <div className="flex flex-col items-center justify-start gap-6">

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
