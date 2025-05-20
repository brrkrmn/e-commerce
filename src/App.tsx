import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="border-2 min-h-screen flex flex-col items-center justify-between">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
