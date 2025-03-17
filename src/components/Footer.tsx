import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Tentang Kami</h2>
              <p className="mb-4">SMK Permata 1 dan 2 Bogor adalah sekolah menengah kejuruan yang berdedikasi untuk menghasilkan lulusan berkualitas dan siap kerja.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Link Cepat</h2>
              <ul className="space-y-2">
                <li><Link to="/profil" className="hover:text-blue-200">Profil Sekolah</Link></li>
                <li><Link to="/jurusan" className="hover:text-blue-200">Program Keahlian</Link></li>
                <li><Link to="/ppdb" className="hover:text-blue-200">Pendaftaran Siswa Baru</Link></li>
                <li><Link to="/prestasi" className="hover:text-blue-200">Prestasi</Link></li>
                <li><Link to="/berita" className="hover:text-blue-200">Berita & Kegiatan</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Hubungi Kami</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 mt-1" />
                  <p>Jl. Raya Bogor No. 123, Bogor, Jawa Barat</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6" />
                  <p>(021) 1234-5678</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6" />
                  <p>info@smkpermatabogor.sch.id</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Sosial Media</h2>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-200">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-blue-200">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-blue-200">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Newsletter</h3>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Email Anda"
                    className="px-4 py-2 rounded-l-lg w-full text-gray-900"
                  />
                  <button className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-r-lg font-semibold hover:bg-yellow-400">
                    Kirim
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-blue-950 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 SMK Permata 1 dan 2 Bogor. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}