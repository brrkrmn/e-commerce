import { BrowserRouter, Route, Routes } from "react-router";
import PageContent from "./layout/PageContent/PageContent";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between">
      <BrowserRouter>
        <PageContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
          </Routes>
        </PageContent>
      </BrowserRouter>
    </div>
  );
}

export default App;
