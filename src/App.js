import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextProvider from "./context/Context";
import Navbar from "./components/Navbar/Navbar";
import Shop from "../src/pages/SHop/Shop";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
