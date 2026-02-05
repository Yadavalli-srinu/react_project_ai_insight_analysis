import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Analyze from "./pages/Analyze";
import History from "./pages/History";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyze" element={<Analyze />} />
        <Route path="/history" element={<History />} />
        <Route
          path="*"
          element={<h2 style={{ color: "white", padding: "40px" }}>404 - Page Not Found</h2>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;