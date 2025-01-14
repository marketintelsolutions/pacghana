import MainLayout from "./components/MainLayout";
import About from "./pages/About";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router";
import Services from "./pages/Services";
import FinancialAdvisory from "./pages/FinancialAdvisory";
import CapitalRaisingAdvisory from "./pages/CapitalRaisingAdvisory";
import Contact from "./pages/Contact";
import MIlestones from "./pages/MIlestones";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/milestones" element={<MIlestones />} />
        <Route path="/services/financial-advisory" element={<FinancialAdvisory />} />
        <Route path="/services/capital-raising-advisory" element={<CapitalRaisingAdvisory />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
