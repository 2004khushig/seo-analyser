import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Analyzing from "./pages/Analyzing";
import Report from "./pages/Report";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loading" element={<Analyzing />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </BrowserRouter>
  );
}
