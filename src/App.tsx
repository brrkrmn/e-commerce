import { BrowserRouter, Route, Routes } from "react-router";
import PageContent from "./layout/PageContent/PageContent";
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between">
      <BrowserRouter>
        <PageContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </PageContent>
      </BrowserRouter>
    </div>
  );
}

export default App;
