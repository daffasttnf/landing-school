import { Link } from "react-router-dom";
import { Activity, ChevronLeft, Users, Calendar, Award } from "lucide-react";

export default function Dance() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-pink-900/75"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ekstrakurikuler Dance</h1>
            <p className="text-xl">
              Wadah untuk mengekspresikan kreativitas melalui gerakan tari modern dan tradisional.
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
          <ChevronLeft className="w-5 h-5 mr-1" /> Kembali ke Daftar Ekstrakurikuler
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Description */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Tentang Ekstrakurikuler Dance</h2>
              <p className="text-gray-700 mb-4">
                Ekstrakurikuler Dance SMK Permata adalah wadah bagi siswa yang memiliki minat dan bakat dalam seni tari.
                Kami mengembangkan berbagai genre tari mulai dari modern dance, contemporary, hingga tari tradisional Indonesia.
              </p>
              <p className="text-gray-700 mb-4">
                Dibimbing oleh pelatih profesional, anggota ekstrakurikuler ini rutin tampil dalam berbagai event sekolah
                dan kompetisi antar sekolah. Kami percaya bahwa seni tari tidak hanya tentang gerakan tubuh, tetapi juga
                tentang mengekspresikan emosi dan bercerita melalui gerakan.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start">
                  <Activity className="w-6 h-6 text-pink-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900">Beragam Genre</h3>
                    <p className="text-gray-600">Modern, contemporary, tradisional, K-Pop cover</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-pink-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900">Pelatih Profesional</h3>
                    <p className="text-gray-600">Dibimbing oleh penari berpengalaman</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="w-6 h-6 text-pink-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900">Jadwal Latihan</h3>
                    <p className="text-gray-600">Rabu & Jumat, 15.00-17.00 WIB</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-pink-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900">Prestasi</h3>
                    <p className="text-gray-600">Juara 1 Lomba Tari Modern Se-Kota 2023</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Galeri Kegiatan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Latihan Dance 1"
                  className="rounded-lg h-64 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Penampilan Dance"
                  className="rounded-lg h-64 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Latihan Dance 2"
                  className="rounded-lg h-64 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Koreografi Grup"
                  className="rounded-lg h-64 w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-bold text-blue-900 mb-4">Informasi Ekstrakurikuler</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">Pembina</h3>
                  <p className="text-gray-600">Ibu Siti Rahayu, S.Pd</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Ketua</h3>
                  <p className="text-gray-600">Rina Wijaya (XII Multimedia 2)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Jumlah Anggota</h3>
                  <p className="text-gray-600">35 siswa aktif</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Lokasi Latihan</h3>
                  <p className="text-gray-600">Aula Serbaguna SMK Permata</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Pencapaian</h3>
                  <ul className="list-disc list-inside text-gray-600 pl-2">
                    <li>Juara 1 Dance Competition 2023</li>
                    <li>Finalis Indonesia Dance Festival 2022</li>
                    <li>Penampil tetap di acara kota</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}