import { Link } from 'react-router-dom';
import { Trophy, Calendar, Users, Award, ChevronLeft } from 'lucide-react';

export default function Juara1LKS() {
  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <Link 
          to="/prestasi" 
          className="flex items-center text-blue-900 mb-8 hover:text-blue-700 transition"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Kembali ke Daftar Prestasi
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header with image */}
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Juara 1 LKS Tingkat Nasional"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <div className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 inline-flex items-center">
                <Trophy className="w-4 h-4 mr-2" />
                Akademik
              </div>
              <h1 className="text-4xl font-bold text-white mb-2">Juara 1 Lomba Kompetensi Siswa Tingkat Nasional</h1>
              <div className="flex items-center text-white/90">
                <Calendar className="w-5 h-5 mr-1" />
                <span className="mr-4">2023</span>
                <Users className="w-5 h-5 mr-1" />
                <span>Teknik Komputer dan Jaringan</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Deskripsi Prestasi</h2>
              <p className="text-gray-700 mb-6">
                Siswa SMK Permata berhasil meraih juara 1 dalam Lomba Kompetensi Siswa (LKS) tingkat nasional di bidang Teknik Komputer dan Jaringan. Prestasi ini merupakan hasil dari kerja keras dan dedikasi selama berbulan-bulan dalam mempersiapkan diri untuk kompetisi bergengsi ini.
              </p>
              
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Detail Kompetisi</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex">
                  <span className="text-blue-900 mr-2">•</span>
                  <span>Lomba diselenggarakan di Jakarta pada 15-20 Juli 2023</span>
                </li>
                <li className="flex">
                  <span className="text-blue-900 mr-2">•</span>
                  <span>Diikuti oleh 34 provinsi se-Indonesia</span>
                </li>
                <li className="flex">
                  <span className="text-blue-900 mr-2">•</span>
                  <span>Materi lomba meliputi jaringan komputer, keamanan sistem, dan troubleshooting</span>
                </li>
                <li className="flex">
                  <span className="text-blue-900 mr-2">•</span>
                  <span>Peserta harus menyelesaikan berbagai challenge teknis dalam waktu terbatas</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-blue-900 mb-3">Proses Persiapan</h3>
              <p className="text-gray-700 mb-6">
                Tim SMK Permata mempersiapkan diri selama 6 bulan dengan pelatihan intensif dibimbing oleh guru dan praktisi industri. Persiapan meliputi pelatihan teknis, simulasi kompetisi, dan pembekalan mental. Sekolah menyediakan fasilitas laboratorium khusus dengan peralatan terkini untuk mendukung persiapan tim.
              </p>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                  <Award className="w-6 h-6 mr-2" />
                  Penghargaan
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">•</span>
                    <span>Piala dan medali emas dari Kementerian Pendidikan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">•</span>
                    <span>Beasiswa pendidikan dari sponsor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">•</span>
                    <span>Sertifikat kompetensi nasional</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-900 mr-2">•</span>
                    <span>Kesempatan magang di perusahaan IT ternama</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Tim Pemenang</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-blue-900">Peserta</h4>
                    <p className="text-gray-700">Andi Wijaya (XII TKJ 2)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-900">Pelatih</h4>
                    <p className="text-gray-700">Bapak Dr. Teguh Santoso, M.Kom.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-900">Pendamping</h4>
                    <p className="text-gray-700">Ibu Siti Aminah, S.Kom.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="px-8 pb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Galeri Kegiatan</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Sesi Pelatihan" 
                className="rounded-lg object-cover h-48 w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1581093057305-25ad20d0b6b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Saat Kompetisi" 
                className="rounded-lg object-cover h-48 w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1581093057927-1c8a0e7d9c3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Penghargaan" 
                className="rounded-lg object-cover h-48 w-full"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-blue-900 mb-6">Ingin Meraih Prestasi Serupa?</h3>
          <p className="text-gray-600 mb-6">Bergabunglah dengan SMK Permata dan kembangkan potensimu di bidang Teknik Komputer dan Jaringan!</p>
          <Link
            to="/ppdb"
            className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition inline-block"
          >
            Daftar PPDB Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}