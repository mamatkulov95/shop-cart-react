import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextProvider from "./context/Context";
import Navbar from "./components/Navbar/Navbar";
import Shop from "../src/pages/SHop/Shop";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
