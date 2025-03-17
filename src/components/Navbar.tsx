import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { School2, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo dan Nama Sekolah */}
          <Link to="/" className="flex items-center space-x-3">
            <School2 className="h-8 w-8" />
            <div>
              <h1 className="text-xl font-bold">SMK Permata</h1>
              <p className="text-sm">1 dan 2 Bogor</p>
            </div>
          </Link>

          {/* Menu untuk Desktop */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-200 transition duration-300">Beranda</Link>
            <Link to="/profil" className="hover:text-blue-200 transition duration-300">Profil</Link>
            <Link to="/jurusan" className="hover:text-blue-200 transition duration-300">Jurusan</Link>
            <Link to="/fasilitas" className="hover:text-blue-200 transition duration-300">Fasilitas</Link>
            <Link to="/prestasi" className="hover:text-blue-200 transition duration-300">Prestasi</Link>
            <Link to="/ppdb" className="hover:text-blue-200 transition duration-300">PPDB</Link>
            <Link to="/kontak" className="hover:text-blue-200 transition duration-300">Kontak</Link>
          </div>

          {/* Tombol Hamburger untuk Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menu untuk Mobile */}
        <div
          className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-900 ease-in-out`}
        >
          <div className="flex flex-col space-y-4 mt-4">
            <Link to="/" className="hover:text-blue-200 transition duration-300">Beranda</Link>
            <Link to="/profil" className="hover:text-blue-200 transition duration-300">Profil</Link>
            <Link to="/jurusan" className="hover:text-blue-200 transition duration-300">Jurusan</Link>
            <Link to="/fasilitas" className="hover:text-blue-200 transition duration-300">Fasilitas</Link>
            <Link to="/prestasi" className="hover:text-blue-200 transition duration-300">Prestasi</Link>
            <Link to="/ppdb" className="hover:text-blue-200 transition duration-300">PPDB</Link>
            <Link to="/kontak" className="hover:text-blue-200 transition duration-300">Kontak</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}