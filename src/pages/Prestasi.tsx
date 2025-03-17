
import { Link } from 'react-router-dom';
import { Trophy, Award, Medal, ChevronRight } from 'lucide-react';

export default function Prestasi() {
  const achievements = [
    {
      category: "Akademik",
      title: "Juara 1 Lomba Kompetensi Siswa Tingkat Nasional",
      year: "2023",
      description: "Siswa SMK Permata meraih juara 1 dalam Lomba Kompetensi Siswa (LKS) tingkat nasional di bidang Teknik Komputer dan Jaringan.",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <Trophy className="w-8 h-8 text-white" />
    },
    {
      category: "Non-Akademik",
      title: "Juara Umum FLS2N Tingkat Provinsi",
      year: "2022",
      description: "Tim seni SMK Permata meraih juara umum dalam Festival dan Lomba Seni Siswa Nasional (FLS2N) tingkat provinsi.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <Medal className="w-8 h-8 text-white" />
    },
    {
      category: "Inovasi",
      title: "Penghargaan Inovasi Teknologi Tingkat Nasional",
      year: "2021",
      description: "Tim riset SMK Permata meraih penghargaan inovasi teknologi tingkat nasional untuk proyek pengembangan aplikasi berbasis AI.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <Award className="w-8 h-8 text-white" />
    },
    {
      category: "Olahraga",
      title: "Juara 1 Basket Pelajar Tingkat Kota",
      year: "2023",
      description: "Tim basket SMK Permata meraih juara 1 dalam kejuaraan basket pelajar tingkat kota.",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <Trophy className="w-8 h-8 text-white" />
    },
    {
      category: "Seni",
      title: "Juara 2 Lomba Tari Tradisional Tingkat Provinsi",
      year: "2022",
      description: "Tim tari SMK Permata meraih juara 2 dalam lomba tari tradisional tingkat provinsi.",
      image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e9a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <Medal className="w-8 h-8 text-white" />
    },
    {
      category: "Teknologi",
      title: "Juara 3 Lomba Robotik Tingkat Nasional",
      year: "2021",
      description: "Tim robotik SMK Permata meraih juara 3 dalam lomba robotik tingkat nasional.",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      icon: <Award className="w-8 h-8 text-white" />
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Prestasi SMK Permata</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Kami bangga dengan berbagai prestasi yang telah diraih oleh siswa-siswi SMK Permata di berbagai bidang, baik akademik maupun non-akademik.
        </p>

        {/* Grid Prestasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-lg"
            >
              {/* Gambar Prestasi */}
              <div className="relative h-48">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                    {achievement.title}
                  </h3>
                </div>
              </div>

              {/* Konten Prestasi */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-900 p-3 rounded-full">
                    {achievement.icon}
                  </div>
                  <span className="ml-3 text-blue-900 font-semibold">{achievement.category}</span>
                </div>
                <p className="text-gray-600 mb-4">{achievement.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{achievement.year}</span>
                  <Link
                    to={`/prestasi/${achievement.title.toLowerCase().replace(/ /g, '-')}`}
                    className="text-blue-900 font-medium flex items-center hover:text-blue-700"
                  >
                    Lihat detail <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-blue-900 mb-6">Bangga Menjadi Bagian dari SMK Permata</h3>
          <p className="text-gray-600 mb-6">Bergabunglah dengan kami dan raih prestasi gemilang bersama SMK Permata!</p>
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