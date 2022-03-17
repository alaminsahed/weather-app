import "./App.css";
import CountryDetails from "./Pages/CountryDetails";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="countryDetails/:country" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
