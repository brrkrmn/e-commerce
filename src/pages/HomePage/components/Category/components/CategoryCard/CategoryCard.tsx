import { Link } from "react-router";

const CategoryCard = ({ category }: { category: { address: string; src: string;  title: string }}) => {
  return (
        <Link
          to={category.address}
          className="relative flex items-center justify-center h-[500px] w-full bg-cover bg-center max-w-[300px] md:max-w-full"
          style={{ backgroundImage: `url(${category.src})` }}
        >
          <div className="bg-blue-opacity absolute bottom-0 left-0 w-full md:w-fit h-[60%] md:h-[50%] flex flex-col items-start justify-center gap-4 px-12 text-xl md:text-lg md:px-6 text-white">
            <h3 className="font-semibold">{category.title}</h3>
            <button className="border-1 border-white rounded-sm px-6 py-3 text-xs font-semibold">
              EXPLORE ITEMS
            </button>
          </div>
        </Link>

  )
}

export default CategoryCard;