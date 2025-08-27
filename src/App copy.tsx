import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Home from "./pages/Home";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUso from "./pages/TermosUso";
import SobreNos from "./pages/SobreNos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="privacidade" element={<PoliticaPrivacidade />} />
          <Route path="termos" element={<TermosUso />} />
          <Route path="sobre" element={<SobreNos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
