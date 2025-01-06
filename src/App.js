import MainLayout from "./components/MainLayout";
import About from "./pages/About";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router";
import Services from "./pages/Services";
import FinancialAdvisory from "./pages/FinancialAdvisory";
import CapitalRaisingAdvisory from "./pages/CapitalRaisingAdvisory";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/financial-advisory" element={<FinancialAdvisory />} />
        <Route path="/services/capital-raising-advisory" element={<CapitalRaisingAdvisory />} />
      </Route>
    </Routes>
  );
}

export default App;
