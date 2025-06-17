import { Link } from "react-router";

const ProductCard = ({
  product,
}: {
  product: {
    src: string;
    title: string;
    description: string;
    price: string;
    salePrice: string;
    address: string;
    colors?: string[];
  };
}) => {
  return (
    <Link
      to={product.address}
      className="w-[255px] md:w-[190px] flex flex-col items-center justify-start gap-3"
    >
      <img
        src={product.src}
        className="bg-gray w-full flex items-center justify-center h-80 md:h-64 object-cover"
      />
      <h5 className="text-dark-blue text-sm font-bold">{product.title}</h5>
      <p className="text-gray text-sm font-semibold">{product.description}</p>
      <div className="flex items-center justify-center gap-2 font-semibold text-sm">
        <p className="text-gray-2">{product.price}</p>
        <p className="text-green">{product.salePrice}</p>
      </div>
      {product.colors && (
        <div className="flex items-center justify-center gap-1">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className={`rounded-full w-4 h-4`}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      )}
    </Link>
  );
};

export default ProductCard;
