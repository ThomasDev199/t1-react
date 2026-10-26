
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import RickMorty from "./components/RickMorty";

import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <div id="top">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/RickMorty" element={<RickMorty />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
