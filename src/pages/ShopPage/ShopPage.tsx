import Clients from "../../components/Clients/Clients";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

const ShopPage = () => {
  return (
    <div className="w-full max-w-[1400px] flex flex-col items-center justify-start mx-auto min-h-screen font-montserrat tracking-wide">
      <div className="w-full px-4 bg-light-gray-2 py-10 flex flex-col items-center justify-center gap-4">
        <Header />
        <Categories />
      </div>
      <div className="w-full flex flex-col items-center justify-start px-4">
        <Products />
      </div>
      <div className="w-full flex items-center justify-center bg-light-gray-2">
        <Clients />
      </div>
    </div>
  );
};

export default ShopPage;
