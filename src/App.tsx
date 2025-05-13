import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Jurusan from "./pages/Jurusan";
import Fasilitas from "./pages/Fasilitas";
import Prestasi from "./pages/Prestasi";
import PPDB from "./pages/ppdb";
import Kontak from "./pages/Kontak";
import LabKomputer from "./pages/fasilitas/LabKomputer";
import Dance from "./pages/ekstrakurikuler/Dance";
import Juara1LKS from "./pages/prestasi/Juara1LKS";
import TKJ from "./pages/jurusan/TKJ";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/jurusan" element={<Jurusan />} />
        <Route path="/jurusan/teknik-komputer-dan-jaringan" element={<TKJ />} />
        <Route path="/fasilitas" element={<Fasilitas />} />
        <Route
          path="/fasilitas/lab-komputer-terlengkap"
          element={<LabKomputer />}
        />
        <Route path="/ekstrakurikuler/dance" element={<Dance />} />
        <Route path="/prestasi" element={<Prestasi />} />
        <Route path="/prestasi/juara-1-lomba-kompetensi-siswa-tingkat-nasional" element={<Juara1LKS />} />
        <Route path="/ppdb" element={<PPDB />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
