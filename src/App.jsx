import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Inicio from "./pages/Inicio.jsx";
import Zonadecuidado from "./pages/Zonadecuidado.jsx";
import Reporte from "./pages/reporte.jsx";
import Registro from "./pages/Registro.jsx";
export default function App() {
  return (
    <>
      <Header />
      <NavBar />
      <main role="main">

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Zonadecuidado" element={<Zonadecuidado />} />
          <Route path="/Reporte" element={<Reporte />} />
          <Route path="/Guiadecuidado" element={<Guiadecuidado />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}