import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Shop from "./pages/Shop/Shop";
import Card from "./pages/Cards/Card";
import About from "./pages/About/About";
import ContextProvider from "./context/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/card" element={<Card />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
