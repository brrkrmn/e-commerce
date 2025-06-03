import { LayoutGrid, List } from "lucide-react";
import { useMemo, useState } from "react";
import ProductCard from "../../../../components/ProductCard/ProductCard";
import { products } from "../../constants";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(products.length / 8);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * 8;
    return products.slice(start, start + 8);
  }, [currentPage]);

  return (
    <div className="w-full flex flex-col items-center justify-start py-10 gap-8">
      <div className="w-full flex flex-col items-center justify-start md:flex-row md:justify-between gap-8">
        <h6 className="text-sm text-gray font-semibold">
          Showing all {products.length} results
        </h6>
        <div className="flex items-center justify-center gap-4">
          <h6 className="text-sm text-gray font-semibold">Views:</h6>
          <button className="cursor-pointer flex items-center justify-center h-12 w-12 border-2 border-light-gray-3 rounded-sm">
            <LayoutGrid className="h-6 w-6 fill-dark-blue" />
          </button>
          <button className="cursor-pointer flex items-center justify-center h-12 w-12 border-2 border-light-gray-3 rounded-sm">
            <List className="h-6 w-6" />
          </button>
        </div>
        <form className="flex items-center justify-center gap-4">
          <select
            name="filter"
            id="filter"
            className="border-2 h-12 px-3  font-light rounded-sm box-content border-light-gray-3 bg-light-gray-2 text-gray"
          >
            <option value="popularity">Popularity</option>
            <option value="price">Price</option>
            <option value="recent">Recent</option>
          </select>
          <button
            type="submit"
            className="bg-blue cursor-pointer text-white text-sm font-medium px-6 py-4 rounded-sm"
          >
            Filter
          </button>
        </form>
      </div>
      <div className="py-10 w-full flex flex-col md:flex-row flex-wrap items-center justify-center gap-10">
        {paginatedProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-0 border-2 border-light-gray-3 rounded-xl h-16 *:h-full *:p-6 font-semibold shadow-sm *:transition *:hover:bg-light-gray-2">
        <button
          className="flex items-center justify-center bg-white text-blue cursor-pointer disabled:cursor-auto disabled:text-gray text-sm rounded-l-xl disabled:opacity-50"
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        >
          First
        </button>
        {[...Array(pageCount)].map((_, i) => (
          <button
            key={i}
            className={`flex items-center justify-center w-10 text-sm border-l-2 border-light-gray-3 cursor-pointer ${currentPage === i + 1 ? "bg-blue text-white hover:!bg-blue" : "bg-white text-blue"}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="flex items-center justify-center bg-white text-sm rounded-r-xl border-light-gray-3 cursor-pointer disabled:cursor-auto border-l-2 text-blue disabled:text-gray disabled:opacity-50"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === pageCount}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
