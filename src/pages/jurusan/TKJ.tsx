import { Link } from 'react-router-dom';
import { Cpu, Wifi, Server, Clock, ChevronLeft } from 'lucide-react';

export default function TKJ() {
  return (
    <div className="pb-16 bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/75"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <Link 
              to="/jurusan" 
              className="flex items-center text-white/90 hover:text-white mb-6 transition"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Kembali ke Daftar Jurusan
            </Link>
            <h1 className="text-5xl font-bold mb-4">Teknik Komputer dan Jaringan</h1>
            <p className="text-xl">
              Mempelajari perakitan komputer, jaringan, dan sistem operasi untuk siap kerja di industri IT
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Tentang Jurusan TKJ</h2>
            <p className="text-gray-700 mb-6">
              Jurusan Teknik Komputer dan Jaringan (TKJ) di SMK Permata 1 Bogor dirancang untuk menghasilkan tenaga terampil di bidang IT, khususnya jaringan komputer dan sistem operasi. Siswa akan dibekali dengan pengetahuan dan keterampilan praktis yang dibutuhkan di dunia kerja.
            </p>
            
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Kompetensi Lulusan</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex">
                <span className="text-blue-900 mr-2">•</span>
                <span>Mampu merakit, merawat, dan memperbaiki komputer</span>
              </li>
              <li className="flex">
                <span className="text-blue-900 mr-2">•</span>
                <span>Menginstalasi dan mengkonfigurasi jaringan komputer (LAN, WAN, Wireless)</span>
              </li>
              <li className="flex">
                <span className="text-blue-900 mr-2">•</span>
                <span>Mengelola sistem operasi server (Linux, Windows Server)</span>
              </li>
              <li className="flex">
                <span className="text-blue-900 mr-2">•</span>
                <span>Melakukan troubleshooting jaringan</span>
              </li>
              <li className="flex">
                <span className="text-blue-900 mr-2">•</span>
                <span>Mengimplementasikan keamanan jaringan</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Prospek Karir</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Network Administrator</h4>
                <p className="text-gray-600">Mengelola dan memelihara jaringan komputer perusahaan</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">IT Support</h4>
                <p className="text-gray-600">Memberikan dukungan teknis untuk pengguna komputer</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">System Administrator</h4>
                <p className="text-gray-600">Mengelola server dan sistem operasi perusahaan</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Network Engineer</h4>
                <p className="text-gray-600">Merancang dan mengimplementasikan jaringan komputer</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Fasilitas Unggulan</h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Cpu className="w-5 h-5 text-blue-900" />
                  </div>
                  <span>Lab Komputer Terlengkap dengan spesifikasi tinggi</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Wifi className="w-5 h-5 text-blue-900" />
                  </div>
                  <span>Jaringan Internet Cepat 1Gbps untuk praktik jaringan</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Server className="w-5 h-5 text-blue-900" />
                  </div>
                  <span>Server khusus untuk praktik administrasi jaringan</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Clock className="w-5 h-5 text-blue-900" />
                  </div>
                  <span>Akses lab 24 jam untuk siswa berprestasi</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-blue-900 mb-4">Mitra Industri</h3>
              <div className="flex flex-wrap gap-4">
                <img 
                  src="https://via.placeholder.com/80x40?text=Telkom" 
                  alt="Telkom" 
                  className="h-10 object-contain"
                />
                <img 
                  src="https://via.placeholder.com/80x40?text=Cisco" 
                  alt="Cisco" 
                  className="h-10 object-contain"
                />
                <img 
                  src="https://via.placeholder.com/80x40?text=MikroTik" 
                  alt="MikroTik" 
                  className="h-10 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Testimoni */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Kata Alumni</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 italic mb-4">"Jurusan TKJ di SMK Permata memberikan saya dasar yang kuat di bidang jaringan komputer. Sekarang saya bekerja sebagai Network Engineer di perusahaan IT ternama."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-900 mr-4"></div>
                <div>
                  <p className="font-semibold text-blue-900">Rizky Pratama</p>
                  <p className="text-gray-500">Network Engineer, PT. Telkom Indonesia</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 italic mb-4">"Praktik langsung di lab sekolah dengan peralatan terkini membuat saya siap bekerja. Sekarang saya menjadi IT Support di perusahaan multinasional."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-900 mr-4"></div>
                <div>
                  <p className="font-semibold text-blue-900">Dewi Anggraeni</p>
                  <p className="text-gray-500">IT Support, PT. Astra International</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-blue-900 mb-6">Tertarik dengan Jurusan TKJ?</h3>
          <p className="text-gray-600 mb-6">Daftarkan diri Anda sekarang dan raih masa depan gemilang di bidang IT!</p>
          <Link
            to="/ppdb"
            className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition inline-block"
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}