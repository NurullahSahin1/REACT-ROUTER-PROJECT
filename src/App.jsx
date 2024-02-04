import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPages from "./pages/MainPages";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<MainPages />} />
          <Route path="/ürünler" element={<ProductPage />} />
          <Route path="/ürün/:id" element={<ProductDetail />} />

          <Route path="/kategori" element={<CategoryPage />}>
            <Route path="hikaye" element={<h1>HİKAYE</h1>} />
            <Route path="roman" element={<h1>ROMAN</h1>} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
