import { Link } from "react-router";
import { categories } from "../../constants";

const Categories = () => {
  return (
    <div className="w-full flex flex-col gap-4 md:flex-row items-center justify-start ">
      {categories.map((cat, index) => (
        <Link
          to="/"
          key={index}
          className="relative max-w-[288px] w-full overflow-hidden cursor-pointer aspect-square flex flex-col items-center justify-center text-white"
        >
          <img src={cat.image} className="absolute w-full h-full object-cover z-0 brightness-75" />
          <p className="z-50 uppercase font-medium">{cat.title}</p>
          <p className="z-50 absolute bottom-20 md:bottom-10">5 Items</p>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
