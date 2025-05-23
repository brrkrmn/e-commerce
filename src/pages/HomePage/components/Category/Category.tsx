import CategoryCard from "./components/CategoryCard/CategoryCard";
import { categories } from "./constants";

const Category = () => {
  return (
    <div className="w-full max-w-[1400px] flex flex-col md:flex-row items-center justify-center gap-4 font-montserrat tracking-wide p-4 xl:p-60 md:max-h-[500px]">
      <CategoryCard category={categories[0]} />
      <div className="w-full flex flex-col items-center justify-center gap-4 md:max-h-[500px] md:max-w-[45%]">
        <CategoryCard category={categories[1]} />
        <CategoryCard category={categories[2]} />
      </div>
    </div>
  );
};

export default Category;
