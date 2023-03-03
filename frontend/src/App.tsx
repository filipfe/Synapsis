import Footer from "./components/Footer";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import AutismRoute from "./routes/AutismRoute";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aktualnosci" element={<NewsPage />} />
          <Route path="/autyzm/*" element={<AutismRoute />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
