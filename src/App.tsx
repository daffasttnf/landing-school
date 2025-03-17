import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Jurusan from "./pages/Jurusan";
import Fasilitas from "./pages/Fasilitas";
import Prestasi from "./pages/Prestasi";
import PPDB from "./pages/ppdb";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/jurusan" element={<Jurusan />} />
        <Route path="/fasilitas" element={<Fasilitas />} />
        <Route path="/prestasi" element={<Prestasi />} />
        <Route path="/ppdb" element={<PPDB />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
