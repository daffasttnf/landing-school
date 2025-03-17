import { Link } from 'react-router-dom';
import { School2 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <School2 className="h-8 w-8" />
            <div>
              <h1 className="text-xl font-bold">SMK Permata</h1>
              <p className="text-sm">1 dan 2 Bogor</p>
            </div>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-200">Beranda</Link>
            <Link to="/profil" className="hover:text-blue-200">Profil</Link>
            <Link to="/jurusan" className="hover:text-blue-200">Jurusan</Link>
            <Link to="/fasilitas" className="hover:text-blue-200">Fasilitas</Link>
            <Link to="/prestasi" className="hover:text-blue-200">Prestasi</Link>
            <Link to="/ppdb" className="hover:text-blue-200">PPDB</Link>
            <Link to="/kontak" className="hover:text-blue-200">Kontak</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}