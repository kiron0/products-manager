import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import UploadProducts from "./components/UploadProducts/UploadProducts";
import Products from "./components/Products/Products";
import SingleProduct from "./components/SingleProduct/SingleProduct";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> */}
        <Route
          path="/upload"
          element={<UploadProducts></UploadProducts>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/" element={<Products></Products>}></Route>
        <Route path="/product/:id" element={<SingleProduct></SingleProduct>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
