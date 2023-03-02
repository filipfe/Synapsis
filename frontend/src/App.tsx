import Footer from "./components/Footer";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aktualnosci" element={<NewsPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
