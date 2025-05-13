import { Link } from "react-router-dom";
import { ChevronLeft, Wifi, Cpu, HardDrive, Server } from "lucide-react";

export default function LabKomputer() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/75"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Lab Komputer Terlengkap</h1>
            <p className="text-xl">
              Fasilitas lab komputer dengan perangkat terbaru untuk mendukung pembelajaran teknologi informasi.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <Link
          to="/fasilitas"
          className="flex items-center text-blue-900 mb-8 hover:text-blue-700"
        >
          <ChevronLeft className="w-5 h-5 mr-1" /> Kembali ke Daftar Fasilitas
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Description */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Deskripsi Lab Komputer</h2>
              <p className="text-gray-700 mb-4">
                Lab Komputer SMK Permata merupakan fasilitas unggulan yang dilengkapi dengan perangkat komputer terbaru 
                untuk mendukung pembelajaran teknologi informasi. Dengan kapasitas 40 unit komputer, lab ini dirancang 
                khusus untuk praktikum pemrograman, desain grafis, jaringan komputer, dan pengembangan perangkat lunak.
              </p>
              <p className="text-gray-700 mb-4">
                Setiap komputer dilengkapi dengan spesifikasi tinggi yang mampu menjalankan berbagai software profesional 
                seperti Adobe Creative Suite, Visual Studio Code, Android Studio, dan aplikasi desain 3D. Lab ini juga 
                terhubung dengan jaringan internet berkecepatan tinggi untuk mendukung proses pembelajaran.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start">
                  <Cpu className="w-6 h-6 text-blue-900 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900">Spesifikasi Tinggi</h3>
                    <p className="text-gray-600">Processor Intel Core i7, RAM 16GB, SSD 512GB</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Wifi className="w-6 h-6 text-blue-900 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900">Jaringan Cepat</h3>
                    <p className="text-gray-600">Internet 100Mbps dedicated untuk lab</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <HardDrive className="w-6 h-6 text-blue-900 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900">Software Lengkap</h3>
                    <p className="text-gray-600">Berbagai aplikasi profesional untuk pembelajaran</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Server className="w-6 h-6 text-blue-900 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900">Server Lokal</h3>
                    <p className="text-gray-600">Dukungan server untuk praktikum jaringan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Galeri Lab Komputer</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Lab Komputer 1"
                  className="rounded-lg h-64 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Lab Komputer 2"
                  className="rounded-lg h-64 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1581094794320-4371d1a0e7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Lab Komputer 3"
                  className="rounded-lg h-64 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Lab Komputer 4"
                  className="rounded-lg h-64 w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-bold text-blue-900 mb-4">Informasi Lab</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">Kapasitas</h3>
                  <p className="text-gray-600">40 siswa per sesi</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Jam Operasional</h3>
                  <p className="text-gray-600">Senin-Jumat: 07.00 - 16.00 WIB</p>
                  <p className="text-gray-600">Sabtu: 08.00 - 14.00 WIB</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Lokasi</h3>
                  <p className="text-gray-600">Gedung B, Lantai 2, Ruang B201</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Penanggung Jawab</h3>
                  <p className="text-gray-600">Bapak Ahmad Fauzi, S.Kom</p>
                  <p className="text-gray-600">Ibu Dian Pertiwi, M.Kom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}